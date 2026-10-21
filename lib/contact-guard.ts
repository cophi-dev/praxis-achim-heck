import { createHmac, timingSafeEqual } from "node:crypto";

const MIN_AGE_MS = 3_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

const VOWELS = new Set("aeiouyäöüáéíóúàèìòùâêîôûæøåëïÿ".split(""));

const URL_RE = /https?:\/\/|www\./i;
const LINK_RE = /(?:https?:\/\/|www\.)[^\s<>"']+/gi;
const DOMAIN_RE =
  /(?:^|[^a-z0-9-])(?:[a-z0-9-]{2,}\.)+(?:com|net|org|de|ru|cn|info|biz|io|co|uk|app|shop|online|site|xyz|top|me|tv)(?=$|[^a-z0-9-])/i;
const URL_ONLY_RE = /^(?:https?:\/\/|www\.)\S+$/i;
const DOMAIN_ONLY_RE =
  /^(?:[a-z0-9-]{2,}\.)+(?:com|net|org|de|ru|cn|info|biz|io|co|uk|app|shop|online|site|xyz|top|me|tv)(?:\/\S*)?$/i;

export type ContactRejectReason =
  | "bad-ts"
  | "too-fast"
  | "too-old"
  | "name-digits"
  | "name-url"
  | "name-script"
  | "name-gibberish"
  | "message-url"
  | "message-links"
  | "message-script"
  | "message-gibberish";

/**
 * HMAC key is the existing Resend API key when the server has one.
 * No new env var is required. Without that key the stamp is a plain
 * millisecond timestamp so local runs and previews still verify.
 */
function stampSecret(): string | null {
  const key = process.env.RESEND_API_KEY?.trim();
  return key ? key : null;
}

export function issueContactStamp(now = Date.now()): string {
  const ts = String(now);
  const secret = stampSecret();
  if (!secret) return ts;
  const sig = createHmac("sha256", secret).update(`v1:${ts}`).digest("hex");
  return `${ts}.${sig}`;
}

function timestampReason(ts: unknown, now: number): ContactRejectReason | null {
  if (typeof ts !== "string") return "bad-ts";
  const trimmed = ts.trim();
  const secret = stampSecret();
  let digits = trimmed;
  if (secret) {
    const dot = trimmed.indexOf(".");
    if (dot !== 13) return "bad-ts";
    digits = trimmed.slice(0, dot);
    const sig = trimmed.slice(dot + 1);
    if (!/^\d{13}$/.test(digits) || !/^[0-9a-f]{64}$/.test(sig)) return "bad-ts";
    const expected = createHmac("sha256", secret).update(`v1:${digits}`).digest();
    const actual = Buffer.from(sig, "hex");
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return "bad-ts";
  } else if (!/^\d{13}$/.test(digits)) {
    return "bad-ts";
  }

  const issuedAt = Number(digits);
  const age = now - issuedAt;
  if (age < MIN_AGE_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "too-old";
  return null;
}

function hasDigit(text: string): boolean {
  return /\p{N}/u.test(text);
}

function isForeignScriptOnly(text: string): boolean {
  let latin = 0;
  let cyrillic = 0;
  let cjk = 0;
  for (const ch of text) {
    if (!/\p{L}/u.test(ch)) continue;
    if (/\p{Script=Latin}/u.test(ch)) latin += 1;
    else if (/\p{Script=Cyrillic}/u.test(ch)) cyrillic += 1;
    else if (
      /\p{Script=Han}/u.test(ch) ||
      /\p{Script=Hiragana}/u.test(ch) ||
      /\p{Script=Katakana}/u.test(ch) ||
      /\p{Script=Hangul}/u.test(ch)
    ) {
      cjk += 1;
    }
  }
  return latin === 0 && (cyrillic > 0 || cjk > 0);
}

function latinLetters(token: string): string {
  let out = "";
  for (const ch of token) {
    if (/\p{Script=Latin}/u.test(ch)) out += ch;
  }
  return out;
}

function hasNonLatinLetter(token: string): boolean {
  for (const ch of token) {
    if (/\p{L}/u.test(ch) && !/\p{Script=Latin}/u.test(ch)) return true;
  }
  return false;
}

function letterStats(letters: string): { length: number; vowelRatio: number; maxRun: number; clusterRatio: number } {
  const lower = letters.toLowerCase();
  const length = lower.length;
  if (length === 0) return { length: 0, vowelRatio: 1, maxRun: 0, clusterRatio: 0 };
  let vowels = 0;
  let maxRun = 0;
  let run = 0;
  let clustered = 0;
  for (const ch of lower) {
    if (VOWELS.has(ch)) {
      vowels += 1;
      if (run >= 4) clustered += run;
      run = 0;
    } else {
      run += 1;
      if (run > maxRun) maxRun = run;
    }
  }
  if (run >= 4) clustered += run;
  return { length, vowelRatio: vowels / length, maxRun, clusterRatio: clustered / length };
}

function isRandomMixedCase(letters: string): boolean {
  if (letters.length < 6) return false;
  const cases: Array<"upper" | "lower"> = [];
  for (const ch of letters) {
    const upper = ch.toUpperCase();
    const lower = ch.toLowerCase();
    if (upper === lower) continue;
    cases.push(ch === upper ? "upper" : "lower");
  }
  if (cases.length < 6) return false;
  let transitions = 0;
  for (let i = 1; i < cases.length; i += 1) {
    if (cases[i] !== cases[i - 1]) transitions += 1;
  }
  return transitions >= 4 && transitions / (cases.length - 1) >= 0.5;
}

function isGibberishLetters(letters: string): boolean {
  const { length, vowelRatio, maxRun, clusterRatio } = letterStats(letters);
  if (length < 5) return false;
  if (vowelRatio === 0) return true;
  if (isRandomMixedCase(letters)) return true;
  if (length >= 14 && vowelRatio < 0.15) return true;
  if (length >= 8 && vowelRatio < 0.1 && maxRun >= 6) return true;
  if (length >= 10 && clusterRatio >= 0.72 && vowelRatio < 0.18) return true;
  return false;
}

function isGibberishToken(token: string): boolean {
  if (hasNonLatinLetter(token)) return false;
  const letters = latinLetters(token);
  if (isGibberishLetters(letters)) return true;
  const parts = token.split(/[-'’]+/).filter(Boolean);
  if (parts.length < 2) return false;
  return parts.some((part) => isGibberishLetters(latinLetters(part)));
}

function tokens(text: string): string[] {
  return text
    .split(/\s+/)
    .map((part) => part.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ""))
    .filter((part) => /\p{L}/u.test(part));
}

function nameReason(name: string): ContactRejectReason | null {
  if (hasDigit(name)) return "name-digits";
  if (URL_RE.test(name) || DOMAIN_RE.test(name)) return "name-url";
  if (isForeignScriptOnly(name)) return "name-script";
  if (tokens(name).some(isGibberishToken)) return "name-gibberish";
  return null;
}

function isUrlOnly(text: string): boolean {
  return URL_ONLY_RE.test(text) || DOMAIN_ONLY_RE.test(text);
}

function messageReason(message: string): ContactRejectReason | null {
  if (isUrlOnly(message)) return "message-url";
  const links = message.match(new RegExp(LINK_RE.source, "gi"));
  if (links && links.length > 2) return "message-links";
  if (isForeignScriptOnly(message)) return "message-script";
  const withoutLinks = message.replace(new RegExp(LINK_RE.source, "gi"), " ");
  if (tokens(withoutLinks).some(isGibberishToken)) return "message-gibberish";
  return null;
}

export function contactRejectionReason(input: {
  name: string;
  message: string;
  ts: unknown;
  now?: number;
}): ContactRejectReason | null {
  const now = input.now ?? Date.now();
  const name = input.name.normalize("NFC").trim();
  const message = input.message.normalize("NFC").trim();
  return timestampReason(input.ts, now) ?? nameReason(name) ?? messageReason(message);
}
