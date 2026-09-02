"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");
    if (!name || !email || !phone || !message || !consent) { setStatus("error"); return; }
    const body = [`Name: ${name}`, `E-Mail: ${email}`, `Telefon: ${phone}`, "", message].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Terminanfrage von ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("ok");
    form.reset();
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
      {status === "error" && <p className="text-sm text-red-700">Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Einwilligung.</p>}
      {status === "ok" && <p className="text-sm text-navy">Ihr E-Mail-Programm öffnet sich mit der Nachricht. Alternativ erreichen Sie uns unter {site.phone}.</p>}
      <button type="submit" className="rounded-full bg-navy px-8 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] text-cream uppercase transition hover:bg-brand">Nachricht senden</button>
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
