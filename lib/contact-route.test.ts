import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { issueContactStamp } from "./contact-guard";

const send = vi.hoisted(() => vi.fn());

vi.mock("resend", () => {
  class Resend {
    emails = { send };
  }
  return { Resend };
});

import { POST } from "@/app/api/contact/route";

const ENV_KEYS = ["RESEND_API_KEY", "CONTACT_TO", "CONTACT_FROM", "CONTACT_REPLY_TO"] as const;
const previousEnv = new Map<string, string | undefined>();

beforeEach(() => {
  send.mockReset();
  send.mockResolvedValue({ data: { id: "email_test" }, error: null });
  for (const key of ENV_KEYS) {
    previousEnv.set(key, process.env[key]);
    delete process.env[key];
  }
});

afterEach(() => {
  for (const key of ENV_KEYS) {
    const value = previousEnv.get(key);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  vi.restoreAllMocks();
});

function body(overrides: Record<string, unknown> = {}) {
  return {
    name: "Jörg Müller",
    email: "joerg@example.de",
    phone: "040 1234567",
    message: "Guten Tag, ich hätte gerne einen Termin wegen Rückenschmerzen.",
    consent: true,
    hp: "",
    ts: issueContactStamp(Date.now() - 10_000),
    ...overrides,
  };
}

function post(payload: Record<string, unknown>) {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }),
  );
}

describe("POST /api/contact", () => {
  it("drops honeypot and gibberish without sending mail or logging the text", async () => {
    process.env.RESEND_API_KEY = "test-secret";
    process.env.CONTACT_TO = "praxis@example.de";
    process.env.CONTACT_FROM = "form@example.de";
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const honeypot = await post(body({ hp: "https://secret-spam.example", ts: issueContactStamp(Date.now() - 10_000) }));
    expect(honeypot.status).toBe(200);
    expect(await honeypot.json()).toEqual({ ok: true });

    const spam = await post(
      body({
        name: "xKqPzRtW",
        message: "bcdfghjklmnpqrst kaufen",
        ts: issueContactStamp(Date.now() - 10_000),
      }),
    );
    expect(spam.status).toBe(200);
    expect(await spam.json()).toEqual({ ok: true });
    expect(send).not.toHaveBeenCalled();

    const logged = JSON.stringify(warn.mock.calls);
    expect(logged).toContain("honeypot");
    expect(logged).toContain("name-gibberish");
    expect(logged).not.toContain("xKqPzRtW");
    expect(logged).not.toContain("secret-spam");
    expect(logged).not.toContain("Rückenschmerzen");
    expect(logged).not.toContain("joerg@example.de");
  });

  it("returns the same fake success for a stamp that is too new", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const response = await post(body({ ts: issueContactStamp(Date.now()) }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(send).not.toHaveBeenCalled();
    expect(warn).toHaveBeenCalledWith("contact: rejected", { reason: "too-fast" });
  });

  it("keeps validation errors for real form mistakes", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const response = await post(body({ email: "nicht-eine-email", consent: false }));
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      ok: false,
      error: "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Einwilligung.",
    });
    expect(send).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
  });

  it("passes a normal German request through to mail, and does not send when mail is not configured", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const unconfigured = await post(body());
    expect(unconfigured.status).toBe(503);
    expect(send).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();

    process.env.RESEND_API_KEY = "test-secret";
    process.env.CONTACT_TO = "praxis@example.de";
    process.env.CONTACT_FROM = "form@example.de";
    const sent = await post(body({ ts: issueContactStamp(Date.now() - 10_000) }));
    expect(sent.status).toBe(200);
    expect(await sent.json()).toEqual({ ok: true });
    expect(send).toHaveBeenCalledTimes(1);
    const payload = send.mock.calls[0]?.[0] as { text: string; to: string };
    expect(payload.to).toBe("praxis@example.de");
    expect(payload.text).toContain("Jörg Müller");
    expect(payload.text).toContain("Rückenschmerzen");
  });
});
