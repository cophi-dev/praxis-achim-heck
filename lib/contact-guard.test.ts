import { afterEach, describe, expect, it } from "vitest";
import { contactRejectionReason, issueContactStamp } from "./contact-guard";

const NOW = 1_762_000_000_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const ORIGINAL_KEY = process.env.RESEND_API_KEY;

afterEach(() => {
  if (ORIGINAL_KEY === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = ORIGINAL_KEY;
});

function reason(name: string, message: string, ageMs = 10_000, ts?: unknown) {
  const issuedAt = NOW - ageMs;
  return contactRejectionReason({
    name,
    message,
    ts: ts === undefined ? issueContactStamp(issuedAt) : ts,
    now: NOW,
  });
}

const germanNames = [
  "Li",
  "Bo",
  "Wu",
  "Ma",
  "Ute",
  "Ines",
  "Özge",
  "von",
  "Anna",
  "Achim Heck",
  "Jörg Müller",
  "Björn Weiß",
  "Anja Groß",
  "Hans-Peter Krüger",
  "Karl-Heinz von der Mühlen",
  "Müller-Lüdenscheidt",
  "Franziska von Habsburg",
  "Dr. Schäfer",
  "Dr. med. Müller",
  "Prof. Dr. Achim Heck",
  "THERESA SCHMIDT",
  "anne sophie meier",
  "O'Connor",
  "McDonald",
  "Nguyen",
  "Yvonne Krüger",
  "Zoë Bauer",
];

const germanMessages = [
  "Termin bitte.",
  "Ja, gerne ein Ersttermin am Montag.",
  "Guten Tag, ich hätte gerne einen Termin. Seit drei Wochen habe ich Rückenschmerzen im unteren Rücken.",
  "Bitte um einen Folgetermin nächste Woche. Nachmittags bin ich gut erreichbar.",
  "Hallo, meine Schulter schmerzt seit dem Sport (Fußball). Können Sie mir einen Termin anbieten?",
  "Straße, größer, heiß — ich brauche einen Termin wegen Nackenschmerzen.",
  "Meine Nummer ist 0176 12345678. Bitte zurückrufen.",
  "Knieschmerzen seit dem 21.10.2026, bitte um einen Termin.",
  "Ich habe Angstschweiß und Schwindel. Können Sie helfen?",
  "Krankengymnastik hat nicht gereicht. Ich möchte osteopathisch behandelt werden.",
  "Die Beschwerden sitzen zwischen Schulterblatt und Wirbelsäule.",
  "Er schnarcht seit Wochen und klagt über Kreuzschmerzen.",
  "Ich komme aus Schleswig-Holstein und habe seit Wochen Rückenschmerzen.",
  "Nachtschicht und ein langer Arbeitstag am Schreibtisch. Dazu Impfpflicht-Stress, aber vor allem Nackenschmerzen.",
  "Der Durchschnittswert meiner Schmerzen ist hoch. Bitte um einen Termin zur Physiotherapie.",
  "Ich habe https://www.achimheck.de gefunden und möchte einen Termin vereinbaren.",
  "Siehe https://example.de/a und https://example.de/b — ich möchte einen Termin.",
  "Hallo, ich bin 李伟 und möchte einen Termin wegen Rückenschmerzen.",
  "Ich war auf achimheck.de und möchte einen Ersttermin.",
  "Infos: https://example.com/bcdfghjklmnpqrstuvwxyz — bitte um einen Termin wegen der Schulter.",
];

describe("without a server secret", () => {
  it("issues a plain millisecond stamp", () => {
    delete process.env.RESEND_API_KEY;
    expect(issueContactStamp(NOW)).toBe(String(NOW));
  });

  it.each(germanNames)("accepts the German name %s", (name) => {
    delete process.env.RESEND_API_KEY;
    expect(reason(name, "Ich möchte gerne einen Termin vereinbaren.")).toBeNull();
  });

  it.each(germanMessages)("accepts a normal German message", (message) => {
    delete process.env.RESEND_API_KEY;
    expect(reason("Anna Müller", message)).toBeNull();
  });

  it("accepts a stamp that is exactly 3 seconds old and exactly 24 hours old", () => {
    delete process.env.RESEND_API_KEY;
    expect(reason("Li", "Termin bitte.", 3_000)).toBeNull();
    expect(reason("Li", "Termin bitte.", MAX_AGE_MS)).toBeNull();
  });

  it("rejects stamps that are too fast, too old, missing, or forged", () => {
    delete process.env.RESEND_API_KEY;
    expect(reason("Anna Müller", "Termin bitte.", 2_999)).toBe("too-fast");
    expect(reason("Anna Müller", "Termin bitte.", 0)).toBe("too-fast");
    expect(reason("Anna Müller", "Termin bitte.", -5_000)).toBe("too-fast");
    expect(reason("Anna Müller", "Termin bitte.", MAX_AGE_MS + 1)).toBe("too-old");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, "")).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, "abc")).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, "123")).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, null)).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, 1_762_000_000_000)).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, ` ${NOW - 10_000} `)).toBeNull();
  });
});

describe("with the Resend key as HMAC secret", () => {
  it("rejects a plain timestamp and a tampered signature", () => {
    process.env.RESEND_API_KEY = "test-secret";
    const signed = issueContactStamp(NOW - 10_000);
    expect(signed).toMatch(/^\d{13}\.[0-9a-f]{64}$/);
    expect(reason("Anna Müller", "Termin bitte.", 10_000)).toBeNull();
    expect(reason("Anna Müller", "Termin bitte.", 10_000, String(NOW - 10_000))).toBe("bad-ts");
    const [ts, sig] = signed.split(".");
    const flipped = `${sig[0] === "a" ? "b" : "a"}${sig.slice(1)}`;
    expect(reason("Anna Müller", "Termin bitte.", 10_000, `${ts}.${flipped}`)).toBe("bad-ts");
    expect(reason("Anna Müller", "Termin bitte.", 10_000, `${NOW - 20_000}.${sig}`)).toBe("bad-ts");
  });
});

describe("spam content", () => {
  it("rejects gibberish, digits, urls, and non-Latin script in the name", () => {
    delete process.env.RESEND_API_KEY;
    expect(reason("xKqPzRtW", "Termin bitte.")).toBe("name-gibberish");
    expect(reason("bcdfghjklmnp", "Termin bitte.")).toBe("name-gibberish");
    expect(reason("KjHgFdSaQwEr", "Termin bitte.")).toBe("name-gibberish");
    expect(reason("aSdFgHjKl", "Termin bitte.")).toBe("name-gibberish");
    expect(reason("Anna xKqPzRtW", "Termin bitte.")).toBe("name-gibberish");
    expect(reason("Anna2", "Termin bitte.")).toBe("name-digits");
    expect(reason("Lisa 2", "Termin bitte.")).toBe("name-digits");
    expect(reason("Tim https://seo.example", "Termin bitte.")).toBe("name-url");
    expect(reason("www.backlinks.io", "Termin bitte.")).toBe("name-url");
    expect(reason("buy-now.shop", "Termin bitte.")).toBe("name-url");
    expect(reason("Иван Петров", "Termin bitte.")).toBe("name-script");
    expect(reason("王小明", "Termin bitte.")).toBe("name-script");
  });

  it("rejects url-only messages, too many links, foreign-script spam, and letter salad", () => {
    delete process.env.RESEND_API_KEY;
    expect(reason("Anna Müller", "https://spam.example/offer")).toBe("message-url");
    expect(reason("Anna Müller", "www.spam.example/deal")).toBe("message-url");
    expect(reason("Anna Müller", "best-pills.shop")).toBe("message-url");
    expect(
      reason(
        "Anna Müller",
        "Bitte schauen Sie https://a.example/a, https://b.example/b und https://c.example/c an.",
      ),
    ).toBe("message-links");
    expect(reason("Anna Müller", "Привет, это реклама вашего сайта, купите ссылки")).toBe("message-script");
    expect(reason("Anna Müller", "您好，我们提供网站优化服务请联系")).toBe("message-script");
    expect(reason("Anna Müller", "Hello xKqPzRtWqrs please buy")).toBe("message-gibberish");
    expect(reason("Anna Müller", "Angebot bcdfghjklmnpqrst heute")).toBe("message-gibberish");
  });
});
