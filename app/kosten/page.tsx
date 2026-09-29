import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kosten & Zuschüsse",
  description: "Honorare der Praxis Achim Heck: Ersttermin 135 €, Folgetermin 90 €, Gesundheits-ABO 810 € im Jahr. Informationen zu Krankenkassen-Zuschüssen.",
};

export default function KostenPage() {
  return (
    <>
    <PageHero kicker="Kosten" title="Honorare, Zuschüsse & wertvolle Informationen" lead="Transparente Preise – direkt auf der Seite, ohne Umwege über PDFs." />
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="border border-ink/10 bg-paper p-8">
          <p className="text-[0.7rem] tracking-[0.2em] text-muted uppercase">Ersttermin</p>
          <p className="serif mt-4 text-6xl text-navy">
            {135}<span className="ml-1 text-2xl">€</span>
          </p>
          <p className="mt-4 text-sm text-muted">Anamnese, Untersuchung und Behandlung</p>
        </div>
        <div className="border border-ink/10 bg-paper p-8">
          <p className="text-[0.7rem] tracking-[0.2em] text-muted uppercase">Folgetermin</p>
          <p className="serif mt-4 text-6xl text-navy">
            {90}<span className="ml-1 text-2xl">€</span>
          </p>
          <p className="mt-4 text-sm text-muted">Weiterführende osteopathische Therapie</p>
        </div>
        <div className="border border-navy bg-navy p-8 text-cream">
          <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">Empfohlen</p>
          <p className="serif mt-4 text-6xl">
            {810}<span className="ml-1 text-2xl">€</span>
          </p>
          <p className="mt-1 text-sm text-sand">
            Gesundheits-ABO{" / Jahr"}
          </p>
          <p className="mt-4 text-sm text-sand">270 € jedes Jahr sparen</p>
        </div>
      </div>
      <div className="mt-8 overflow-hidden border border-ink/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-[0.7rem] tracking-[0.16em] text-muted uppercase">
            <tr>
              <th className="px-5 py-3 font-medium">Leistung</th>
              <th className="px-5 py-3 font-medium">Umfang</th>
              <th className="px-5 py-3 font-medium">Honorar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/8">
            <tr>
              <td className="px-5 py-4 text-navy">Ersttermin</td>
              <td className="px-5 py-4 text-muted">Anamnesegespräch, Untersuchung, Behandlung</td>
              <td className="px-5 py-4 font-medium">
                {135}{" €"}
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-navy">Folgetermin</td>
              <td className="px-5 py-4 text-muted">Weiterführende Therapie</td>
              <td className="px-5 py-4 font-medium">
                {90}{" €"}
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-navy">Gesundheits-ABO</td>
              <td className="px-5 py-4 text-muted">12 Termine / Jahr, nur 9 bezahlen</td>
              <td className="px-5 py-4 font-medium">
                {810}{" €"}
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-navy">Zusatztermin im ABO</td>
              <td className="px-5 py-4 text-muted">
                {10}{" € Rabatt je Extra-Termin"}
              </td>
              <td className="px-5 py-4 font-medium">
                {80}{" €"}
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-navy">Einzelwert 12 Folgetermine</td>
              <td className="px-5 py-4 text-muted">ohne ABO</td>
              <td className="px-5 py-4 font-medium">
                1.080{" €"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <h2 className="serif text-3xl text-navy">Was Sie bitte mitbringen</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>Ihre aktuellen ärztlichen Befunde</li>
            <li>Ausreichend Zeit für ein umfängliches Anamnesegespräch mit anschließender Untersuchung und Behandlung</li>
            <li>Zahlung bar oder per Direktüberweisung</li>
          </ul>
          <p className="mt-6 text-sm text-muted">Rechnungen zur Einreichung bei Ihrer Krankenkasse erhalten Sie grundsätzlich monatlich.</p>
        </div>
        <div>
          <h2 className="serif text-3xl text-navy">Kostenerstattung</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Für Bezuschussungen osteopathischer Behandlungskosten gesetzlicher Krankenkassen müssen Sie vor Behandlungsbeginn eine formlose Bescheinigung eines Schulmediziners besorgen. Erkundigen Sie sich bei Ihrer Krankenkasse über aktuelle Zuschüsse für Osteopathie unter{" "}<a className="text-navy underline decoration-gold underline-offset-4" href="https://www.osteokompass.de" target="_blank" rel="noreferrer">osteokompass.de</a>.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Private Krankenversicherungen und Beihilfestellen (ausgenommen Beihilfe Hamburg und Beihilfe Saarland) erstatten die Kosten je nach Tarif im Rahmen des Gebührenverzeichnisses für Heilpraktiker (GebüH von 1985).
          </p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="bg-navy px-8 py-12 text-cream md:px-12">
        <p className="text-[0.7rem] tracking-[0.24em] text-gold uppercase">Gesundheits-ABO</p>
        <h2 className="serif mt-3 text-3xl md:text-4xl">Holistische Fitness mit Know-how</h2>
        <p className="mt-5 max-w-2xl text-sand">
          Ein Jahr lang monatlich motivierende gesunde Leistungen dieser Praxis – ob zur Therapie, zur Erholung oder zum gezielten Training. Hier kann jeder ins Schwitzen oder zur Ruhe kommen.
        </p>
        <p className="mt-6 text-lg">
          12 Termine erhalten, nur 9 bezahlen. Leistungen im Wert von{" "}1.080{" € kosten im Jahres-ABO nur"}{" "}{810}{" €."}
        </p>
        <Link href="/kontakt" className="mt-8 inline-flex rounded-full bg-cream px-7 py-3 text-[0.72rem] tracking-[0.16em] text-navy uppercase">ABO anfragen</Link>
      </div>
    </section>
    </>
  );
}
