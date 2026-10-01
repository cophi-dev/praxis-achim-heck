# Praxis Achim Heck

Website der Praxis Achim Heck (Osteopathie, Heilpraktiker, Hamburg-Langenhorn): [www.achimheck.de](https://www.achimheck.de)

Gebaut mit Next.js und Tailwind CSS.

## Lokal starten

```bash
npm install
npm run dev
```

Öffnen: http://localhost:3000

## Anpassungen

- Texte, Telefon, Adresse: `lib/site.ts`
- Honorare: Objekt `prices` in `lib/site.ts`
- Bilder: `public/images/`
- PDF: `public/pdf/`

## Kontaktformular

Das Formular verschickt Nachrichten über [Resend](https://resend.com). Dafür werden diese Umgebungsvariablen gebraucht: `RESEND_API_KEY`, `CONTACT_TO` (Empfänger) und `CONTACT_FROM` (Absender).
