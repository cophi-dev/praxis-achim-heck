import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ArrowOutIcon, PinIcon } from "@/components/icons";
import { NewTabLink } from "@/components/NewTabLink";
import { PageHero } from "@/components/PageHero";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description: "Terminanfrage, Öffnungszeiten und Anfahrt zur Praxis Achim Heck, Beim Schäferhof 76, 22415 Hamburg-Langenhorn.",
};

export default function KontaktPage() {
  return (
    <>
    <PageHero kicker="Kontakt" title="Termin anfragen" lead="Nachrichten können Sie gerne unter 040. 278 81 728 hinterlassen. Wir rufen zurück – oder nutzen Sie das Formular." />
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div>
        <h2 className="serif text-3xl text-navy">Praxis</h2>
        <address className="mt-6 space-y-3 text-muted not-italic">
          <p>
            Achim Heck<br />Beim Schäferhof 76<br />22415{" "}Hamburg
          </p>
          <p>
            Telefon:{" "}<a className="text-navy" href="tel:+494027881728">040. 278 81 728</a>
          </p>
          <p>
            E-Mail:{" "}<a className="text-navy" href="mailto:info@achimheck.de">info@achimheck.de</a>
          </p>
        </address>
        <h3 className="mt-10 text-[0.7rem] tracking-[0.2em] text-gold uppercase">Öffnungszeiten</h3>
        <p className="mt-3 text-muted">Montag – Freitag 09:00 – 18:00 und nach Vereinbarung</p>
        <h3 className="mt-10 text-[0.7rem] tracking-[0.2em] text-gold uppercase">Anfahrt</h3>
        <p className="mt-3 text-muted">Die Praxis ist auch mit öffentlichen Verkehrsmitteln zu erreichen. Die U-Bahn-Haltestelle Fuhlsbüttel Nord ist 8 Minuten zu Fuß entfernt.</p>
        <p className="mt-4 border-l-2 border-gold pl-4 text-sm text-navy">Folgetermine nach dem Ersttermin gerne 24/7 per WhatsApp über die Ihnen persönlich mitgeteilte Nummer.</p>
        <Image src="/images/praxis-aussen.jpg" alt="Eingang und Praxisschild Beim Schäferhof 76" width={810} height={1080} className="mt-10 h-80 w-full object-cover object-[center_25%]" />
      </div>
      <div className="bg-cream p-6 md:p-8">
        <h2 className="serif text-3xl text-navy">Formular</h2>
        <p className="mt-3 mb-8 text-sm text-muted">Für Ihre erste Terminanfrage. Alle Felder mit * sind Pflichtfelder.</p>
        <ContactForm />
      </div>
    </section>
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <iframe title="Google Karte Praxis Achim Heck" className="h-[420px] w-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=53.642103,10.020767&z=16&hl=de&output=embed" />
        <NewTabLink href={links.route} className="group mt-4 inline-flex min-h-12 items-center gap-3 text-[0.72rem] tracking-[0.18em] text-navy uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
          <PinIcon className="size-5 text-gold" />
          <span className="decoration-gold underline-offset-4 group-hover:underline">Route planen in Google Maps</span>
          <ArrowOutIcon className="size-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </NewTabLink>
      </div>
    </section>
    </>
  );
}
