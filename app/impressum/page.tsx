import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
    <PageHero kicker="Rechtliches" title="Impressum" />
    <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-muted leading-relaxed md:px-8 md:py-24">
      <section>
        <h2 className="text-navy">Angaben gem. § 5 DDG</h2>
        <p className="mt-4">
          Achim Heck<br />Heilpraktiker (verliehen in der Bundesrepublik Deutschland)<br />Die Erlaubnis zur berufsmäßigen Ausübung der Heilkunde ohne Bestallung wurde durch die zuständige Behörde der Freien und Hansestadt Hamburg erteilt.<br />Osteopath (AFO) & Sportphysiotherapeut (VPT)<br />Beim Schäferhof 76<br />22415{" "}Hamburg<br />040. 278 81 728<br />info@achimheck.de<br />www.achimheck.de
        </p>
      </section>
      <section>
        <h2 className="text-navy">Finanzamt & Steuernummer</h2>
        <p className="mt-4">
          Finanzamt Hamburg-Nord<br />Borsteler Chaussee 45<br />22453 Hamburg<br />{"St.-Nr.: "}49 / 089 / 01075
        </p>
      </section>
      <section>
        <h2 className="text-navy">Aufsichtsbehörde</h2>
        <p className="mt-4">
          Gesundheitsamt Hamburg-Nord<br />Eppendorfer Landstr. 59<br />20249 Hamburg<br /><a className="text-navy underline decoration-gold underline-offset-4" href="http://hamburg.de/hamburg-nord/fachamt-gesundheit">hamburg.de/hamburg-nord/fachamt-gesundheit</a>
        </p>
      </section>
      <section>
        <h2 className="text-navy">Berufsrechtliche Regelungen</h2>
        <p className="mt-4">
          Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung (<a className="text-navy underline decoration-gold underline-offset-4" href="https://www.gesetze-im-internet.de/heilprg/">Heilpraktikergesetz, HeilprG</a>)<br />Erste Durchführungsverordnung zum Heilpraktikergesetz (<a className="text-navy underline decoration-gold underline-offset-4" href="https://www.gesetze-im-internet.de/heilprgdv_1/">HeilprGDV 1</a>)
        </p>
      </section>
      <section>
        <h2 className="text-navy">Berufshaftpflichtversicherung</h2>
        <p className="mt-4">
          Continentale Sachversicherung AG, www.continentale.de<br />Vers.-Nr.: 149783546
        </p>
      </section>
      <section>
        <h2 className="text-navy">Haftung für Inhalte</h2>
        <p className="mt-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>
      <section>
        <h2 className="text-navy">Haftung für Links</h2>
        <p className="mt-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>
      <section>
        <h2 className="text-navy">Urheberrecht</h2>
        <p className="mt-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Das Logo der Grafikerin Judith Queins ist urheberrechtlich geschützt und darf in keiner Form privat oder gewerblich ohne Genehmigung der Praxis Achim Heck verwendet werden.
        </p>
      </section>
      <section>
        <h2 className="text-navy">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="mt-4">
          Achim Heck<br />Beim Schäferhof 76<br />22415{" "}Hamburg
        </p>
      </section>
    </article>
    </>
  );
}
