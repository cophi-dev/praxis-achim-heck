# Praxis Achim Heck

Neue Website für die Praxis Achim Heck (Osteopathie, Heilpraktiker, Hamburg-Langenhorn).
Inhalte, Preise, Fotos und Logo stammen ausschließlich von der bestehenden Seite [achimheck.de](https://www.achimheck.de).

## Live

- Share-Link: https://temporary-fleet-walnut-8qo5dcn.vercel.app
- Claim (dauerhaft behalten): https://vercel.com/claim-deployment?code=85f4c16c-976a-40f7-8d0a-6c05b61cb8b5
- GitHub: https://github.com/cophi-dev/praxis-achim-heck

Nach dem Claim kann die Production-Domain analog zur Kunte-Seite auf z. B. `praxis-achim-heck.vercel.app` gelegt werden.

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
