import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <Image src="/images/praxis.jpg" alt="Behandlungsraum der Praxis Achim Heck in Hamburg-Langenhorn" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy-deep/70 to-navy-deep/25" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-16 md:justify-center md:px-8 md:pb-24">
        <p className="animate-fade-up text-[0.7rem] tracking-[0.32em] text-gold uppercase">OSTEO  /  PHYSIO  /  CHIRO  /  SPORT  /  THERAPIE</p>
        <h1 className="serif animate-fade-up delay-1 mt-5 max-w-3xl text-4xl leading-[1.1] text-cream sm:text-6xl md:text-7xl">Die Praxis im Norden Hamburgs</h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-sand md:text-lg">
          Ihr Heilpraktiker für tiefgreifende Diagnostik und nachhaltige Therapiekonzepte.{" Osteopathische Behandlungen werden hier von vielen gesetzlichen Krankenkassen bezuschusst."}
        </p>
        <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/kontakt" className="rounded-full bg-cream px-8 py-3.5 text-center text-[0.72rem] font-medium tracking-[0.18em] text-navy uppercase transition hover:bg-white">Jetzt Termin anfragen</Link><Link href="/kosten" className="rounded-full border border-cream/40 px-8 py-3.5 text-center text-[0.72rem] tracking-[0.18em] text-cream uppercase transition hover:border-cream">Preise ansehen</Link>
        </div>
      </div>
    </section>
    <section className="border-b border-ink/8 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        <div className="px-5 py-8 md:px-8">
          <p className="serif text-2xl text-navy md:text-3xl">30+ Jahre</p>
          <p className="mt-1 text-xs tracking-wide text-muted uppercase">klinische Erfahrung</p>
        </div>
        <div className="px-5 py-8 md:px-8">
          <p className="serif text-2xl text-navy md:text-3xl">VOD</p>
          <p className="mt-1 text-xs tracking-wide text-muted uppercase">Mitglied Osteopathen-Verband</p>
        </div>
        <div className="px-5 py-8 md:px-8">
          <p className="serif text-2xl text-navy md:text-3xl">KK-Zuschuss</p>
          <p className="mt-1 text-xs tracking-wide text-muted uppercase">viele gesetzliche Kassen</p>
        </div>
        <div className="px-5 py-8 md:px-8">
          <p className="serif text-2xl text-navy md:text-3xl">Langenhorn</p>
          <p className="mt-1 text-xs tracking-wide text-muted uppercase">Beim Schäferhof 76</p>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
      <div>
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Willkommen</p>
        <h2 className="serif mt-3 text-4xl text-navy md:text-5xl">Ganzheitliche Gesundheit im Norden Hamburgs</h2>
        <div className="gold-rule mt-6" />
        <p className="mt-6 text-base leading-relaxed text-muted">
          Körperliche Beschwerden, Blockaden oder chronische Schmerzen mindern die Lebensqualität. In dieser Praxis betrachten wir Ihren Körper als funktionelle Einheit. Das Ziel ist, die wahren Ursachen sämtlicher Beschwerden zu verstehen und gezielt zu behandeln.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Durch die Kombination moderner, fortschrittlicher Ansätze aus Osteopathie, Chiropraktik und Sport-Physiotherapie entwickeln wir gemeinsam ein maßgeschneidertes Therapiekonzept – zur akuten Schmerzlinderung, zur langfristigen Rehabilitation oder präventiv zur Steigerung Ihrer Beweglichkeit und Leistungsfähigkeit.
        </p>
        <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-navy">Sie hatten bereits Ihren Ersttermin? Nutzen Sie die Ihnen persönlich mitgeteilte Telefonnummer 24/7 für zügige Folgetermine per WhatsApp.</p>
      </div>
      <div className="relative">
        <Image src="/images/praxis-aussen.jpg" alt="Praxisschild Achim Heck Heilpraktiker" width={810} height={1080} className="h-[520px] w-full rounded-sm object-cover object-[center_20%] shadow-[0_30px_80px_-40px_rgba(24,38,90,0.55)]" />
        <div className="absolute -bottom-6 -left-2 max-w-[16rem] bg-navy p-5 text-cream shadow-xl md:-left-8">
          <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">Hier sind Sie in sicheren Händen</p>
          <p className="serif mt-2 text-xl">30 Jahre Erfahrung, abgeschlossenes Osteopathiestudium (AFO)</p>
        </div>
      </div>
    </section>
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Leistungen</p>
            <h2 className="serif mt-3 max-w-xl text-4xl md:text-5xl">Osteopathie, Physio- und Chirotherapie</h2>
          </div>
          <Link href="/leistungen" className="text-[0.72rem] tracking-[0.18em] text-gold uppercase hover:text-cream">Alle Leistungen →</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link href="/leistungen#osteo" className="group border border-white/10 p-8 transition hover:border-gold/50 hover:bg-white/4">
  <p className="text-[0.7rem] tracking-[0.24em] text-gold">01</p>
  <h3 className="serif mt-4 text-3xl">Osteopathie</h3>
  <p className="mt-4 text-sm leading-relaxed text-sand/90">Ganzheitliche Diagnostik und Therapie vom Kopf bis zu den Füßen – parietal, viszeral und kraniosakral.</p>
  <p className="mt-8 text-[0.7rem] tracking-[0.16em] text-gold uppercase group-hover:text-cream">Mehr erfahren</p>
</Link><Link href="/leistungen#physio" className="group border border-white/10 p-8 transition hover:border-gold/50 hover:bg-white/4">
  <p className="text-[0.7rem] tracking-[0.24em] text-gold">02</p>
  <h3 className="serif mt-4 text-3xl">Physiotherapie</h3>
  <p className="mt-4 text-sm leading-relaxed text-sand/90">Faszientherapie, Lymphdrainage, Massagen und therapeutisches Fitness-Training mit Know-how.</p>
  <p className="mt-8 text-[0.7rem] tracking-[0.16em] text-gold uppercase group-hover:text-cream">Mehr erfahren</p>
</Link><Link href="/leistungen#chiro" className="group border border-white/10 p-8 transition hover:border-gold/50 hover:bg-white/4">
  <p className="text-[0.7rem] tracking-[0.24em] text-gold">03</p>
  <h3 className="serif mt-4 text-3xl">Chiropraktik</h3>
  <p className="mt-4 text-sm leading-relaxed text-sand/90">Gezielte HVLA-Techniken an Wirbelsäule und Gelenken, eingebettet in die parietale Osteopathie.</p>
  <p className="mt-8 text-[0.7rem] tracking-[0.16em] text-gold uppercase group-hover:text-cream">Mehr erfahren</p>
</Link>
        </div>
      </div>
    </section>
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Kosten</p>
        <h2 className="serif mt-3 max-w-2xl text-4xl text-navy md:text-5xl">Transparente Honorare – direkt auf einen Blick</h2>
        <p className="mt-5 max-w-2xl text-muted">Termine sind bar oder per Direktüberweisung zu bezahlen. Rechnungen zur Einreichung bei Ihrer Krankenkasse erhalten Sie grundsätzlich monatlich.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="border border-ink/10 bg-paper p-8">
            <p className="text-[0.7rem] tracking-[0.2em] text-muted uppercase">Ersttermin</p>
            <p className="serif mt-4 text-6xl text-navy">
              {135}<span className="ml-1 text-2xl">€</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">Anamnese, Untersuchung und Behandlung</p>
          </div>
          <div className="border border-ink/10 bg-paper p-8">
            <p className="text-[0.7rem] tracking-[0.2em] text-muted uppercase">Folgetermin</p>
            <p className="serif mt-4 text-6xl text-navy">
              {90}<span className="ml-1 text-2xl">€</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">Weiterführende osteopathische Therapie</p>
          </div>
          <div className="relative border border-navy bg-navy p-8 text-cream">
            <p className="absolute top-0 right-0 bg-gold px-3 py-1 text-[0.65rem] tracking-[0.16em] text-navy uppercase">270 € sparen</p>
            <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">Gesundheits-ABO</p>
            <p className="serif mt-4 text-6xl">
              {810}<span className="ml-1 text-2xl">€</span>
            </p>
            <p className="mt-1 text-sm text-sand">im Jahr</p>
            <ul className="mt-6 space-y-2 text-sm text-sand">
              <li>12 Termine erhalten, nur 9 bezahlen</li>
              <li>
                {"Leistungen im Wert von "}1.080{" € für "}{810}{" €"}
              </li>
              <li>
                {"+ "}{10}{" € Rabatt je Zusatztermin"}
              </li>
            </ul>
            <Link href="/kosten" className="mt-8 inline-flex rounded-full bg-cream px-5 py-2.5 text-[0.7rem] tracking-[0.16em] text-navy uppercase">Details zum ABO</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
      <div className="order-2 md:order-1">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Therapeut</p>
        <h2 className="serif mt-3 text-4xl text-navy md:text-5xl">Achim Heck</h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Osteopath und Mitglied im Verband der Osteopathen Deutschland e.V. sowie im Experten Allianz für Sport, Fitness & Gesundheit e.V. Heilpraktiker, Osteopath (AFO) und Sportphysiotherapeut (VPT) – praktizierend im eigenen Haus im Norden Hamburgs.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          10-jähriges Osteopathie-Studium, langjährige Erfahrung in Klinik, Reha und freier Praxis. Ziel: ursächlich Beschwerden lindern, die Selbstheilungskräfte anregen und Homöostase wiederherstellen.
        </p>
        <Link href="/therapeut" className="mt-8 inline-flex text-[0.72rem] tracking-[0.18em] text-navy uppercase">Vita lesen →</Link>
      </div>
      <div className="order-1 justify-self-center md:order-2">
        <Image src="/images/achim-heck.jpg" alt="Achim Heck, Heilpraktiker und Osteopath" width={420} height={560} className="h-[420px] w-auto bg-white object-contain object-top md:h-[500px]" />
      </div>
    </section>
    <section className="border-t border-ink/8 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Anfahrt & Zeiten</p>
          <h2 className="serif mt-3 text-4xl text-navy">Hamburg-Langenhorn</h2>
          <p className="mt-5 text-muted">
            Beim Schäferhof 76<br />22415{" "}Hamburg
          </p>
          <p className="mt-3 text-muted">U-Bahn Fuhlsbüttel Nord, 8 Minuten zu Fuß</p>
          <p className="mt-3 text-navy">Montag – Freitag 09:00 – 18:00 und nach Vereinbarung</p>
          <p className="mt-3 text-sm text-muted">
            {"Nachrichten unter "}040. 278 81 728{" hinterlassen – wir rufen zurück."}
          </p>
          <Link href="/kontakt" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-[0.72rem] tracking-[0.16em] text-cream uppercase">Kontakt & Karte</Link>
        </div>
        <iframe title="Karte Praxis Achim Heck" className="h-72 w-full rounded-sm border-0 grayscale md:h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=53.642103,10.020767&z=16&output=embed" />
      </div>
    </section>
    </>
  );
}
