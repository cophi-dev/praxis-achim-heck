"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";
type ErrorKind = "validation" | "send";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("validation");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");
    const hp = String(data.get("hp") || "").trim();
    if (!name || !email || !phone || !message || !consent) {
      setErrorKind("validation");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, message, consent: true, hp }),
      });
      const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (!response.ok || !payload?.ok) {
        setErrorKind("send");
        setStatus("error");
        return;
      }
      setStatus("ok");
    } catch {
      setErrorKind("send");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-ink/10 bg-cream px-8 py-14 md:px-12 md:py-16" role="status">
        <p className="serif text-3xl leading-tight text-navy md:text-5xl">Vielen Dank — Ihre Nachricht wurde gesendet.</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">Die Praxis meldet sich in Kürze bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="E-Mail-Adresse" name="email" type="email" required />
      </div>
      <Field label="Telefon" name="phone" type="tel" required />
      <label className="block">
        <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-muted uppercase">Nachricht *</span>
        <textarea name="message" required rows={6} className="w-full rounded-sm border border-ink/12 bg-white px-4 py-3 text-sm outline-none ring-navy/20 focus:ring-2" />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-navy" />
        <span>Hiermit erkläre ich mich einverstanden, dass meine in das Kontaktformular eingegebenen Daten elektronisch gespeichert und zum Zweck der Kontaktaufnahme verarbeitet und genutzt werden. Ich kann meine Einwilligung jederzeit widerrufen.</span>
      </label>
      <div hidden aria-hidden="true">
        <label>
          Firma
          <input type="text" name="hp" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      {status === "error" && errorKind === "validation" && <p className="text-sm text-red-700">Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Einwilligung.</p>}
      {status === "error" && errorKind === "send" && (
        <p className="text-sm text-red-700" role="alert">
          Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder erreichen Sie uns telefonisch unter <a href={site.phoneHref} className="underline">{site.phone}</a> oder per E-Mail unter <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"} className="rounded-full bg-navy px-8 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] text-cream uppercase transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
      <p className="text-xs text-muted">* Pflichtfelder</p>
    </form>
  );
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-muted uppercase">{label} {required ? "*" : ""}</span>
      <input name={name} type={type} required={required} className="w-full rounded-sm border border-ink/12 bg-white px-4 py-3 text-sm outline-none ring-navy/20 focus:ring-2" />
    </label>
  );
}
