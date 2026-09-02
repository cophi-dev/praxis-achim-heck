import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-36 pb-24 text-center">
      <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">404</p>
      <h1 className="serif mt-4 text-5xl text-navy">Seite nicht gefunden</h1>
      <p className="mt-4 text-muted">Diese Seite existiert nicht. Zurück zur Praxis-Startseite.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-navy px-7 py-3 text-[0.72rem] tracking-[0.16em] text-cream uppercase">Zur Startseite</Link>
    </section>
  );
}
