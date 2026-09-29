import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
    <PageHero kicker="Rechtliches" title="Datenschutzerklärung" />
    <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 leading-relaxed text-muted md:px-8 md:py-24">
      <section>
        <h2 className="text-navy">1. Allgemeines</h2>
        <p className="mt-4">
          Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
      </section>
      <section>
        <h2 className="text-navy">2. Verantwortliche Stelle</h2>
        <p className="mt-4">
          {"Achim Heck – "}Beim Schäferhof 76{" – "}22415{" "}Hamburg<br />info@achimheck.de{" · "}040. 278 81 728
        </p>
      </section>
      <section>
        <h2 className="text-navy">3. Datenverarbeitung auf dieser Website</h2>
        <p className="mt-4">
          Bei jedem Aufruf unserer Internetseite erfasst das System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners: Browsertyp und -version, Betriebssystem, Referrer-URL, aufgerufene Seite, Hostname, Uhrzeit der Serveranfrage, IP-Adresse. Diese Daten werden in Logfiles gespeichert und nicht mit anderen personenbezogenen Daten zusammengeführt.
        </p>
        <p className="mt-4">
          Die vorübergehende Speicherung ist notwendig, um Ihnen die Inanspruchnahme der Website zu ermöglichen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen). Eine Weitergabe an Dritte findet nicht statt. Die Daten werden gelöscht, sobald der Zweck der Speicherung entfällt.
        </p>
        <p className="mt-4">
          Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail, Telefon und Nachricht ausschließlich zum Zweck der Kontaktaufnahme verarbeitet. Die Einwilligung können Sie jederzeit widerrufen.
        </p>
      </section>
      <section>
        <h2 className="text-navy">4. Rechte der betroffenen Person</h2>
        <p className="mt-4">
          Sie haben das Recht auf Auskunft, Berichtigung, Sperrung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (in Hamburg der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit). Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>
      </section>
      <section>
        <h2 className="text-navy">5. SSL- bzw. TLS-Verschlüsselung</h2>
        <p className="mt-4">Diese Seite benutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Adresszeile des Browsers.</p>
      </section>
      <section>
        <h2 className="text-navy">6. Datenschutzbeauftragter</h2>
        <p className="mt-4">Zur Benennung eines Datenschutzbeauftragten sind wir nicht verpflichtet.</p>
        <p className="mt-4 text-sm">Stand: Mai 2018, aktualisiert 2026</p>
      </section>
    </article>
    </>
  );
}
