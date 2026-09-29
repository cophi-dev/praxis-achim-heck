import type { Metadata } from "next";
import Image from "next/image";
import { NewTabLink } from "@/components/NewTabLink";
import { PageHero, heroLinkClass } from "@/components/PageHero";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Therapeut",
  description: "Achim Heck – Heilpraktiker, Osteopath (AFO) und Sportphysiotherapeut (VPT) in Hamburg-Langenhorn. Vita und Qualifikationen.",
};

export default function TherapeutPage() {
  return (
    <>
    <PageHero
      kicker="Therapeut"
      title="Achim Heck"
      lead={
        <>
          <NewTabLink href={links.afoAusbildung} className={heroLinkClass}>Osteopath</NewTabLink> und Mitglied im Verband der Osteopathen Deutschland e.V. sowie im Experten Allianz für Sport, Fitness & Gesundheit e.V.
        </>
      }
    />
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
      <div className="bg-cream p-6">
        <Image src="/images/achim-heck.jpg" alt="Porträt Achim Heck" width={720} height={1013} className="h-auto w-full bg-white object-contain" />
        <ul className="mt-6 space-y-2 text-sm text-navy">
          <li>Heilpraktiker (BRD)</li>
          <li>Osteopath (AFO)</li>
          <li>Sportphysiotherapeut (VPT)</li>
          <li>Mitglied VOD e.V.</li>
          <li>Mitglied Experten Allianz e.V.</li>
        </ul>
      </div>
      <article className="space-y-5 text-[1.02rem] leading-relaxed text-muted">
        <p>Der ehemalige Bundespolizist holt zunächst in Bonn berufsbegleitend das Abitur im Fachbereich Sozialpädagogik / Sozialarbeit nach.</p>
        <p>
          Im Oktober 1989 beginnt seine medizinische Grundausbildung zum Masseur und med. Bademeister am Universitätsklinikum der Gesamthochschule in Essen. In der Strahlenklinik S1 und der Urologie U1 wird er bereits früh als Stationstherapeut mit der Mobilisation von schwerstkranken Krebs-Patienten beauftragt.
        </p>
        <p>
          Weitere Erfahrungen macht Achim in Kurkliniken & Physiotherapiepraxen in Schleswig-Holstein, Hamburg und Niedersachsen und spezialisiert sich 1992 auf die Manuelle Lymphdrainage (MLD / KPE) im Bereich der Palliativmedizin.
        </p>
        <p>
          Als Sport-Physiotherapeut bildet Achim sich in Medizinischer Trainingstherapie (MTT / MAT) für den ambulanten Reha-Bereich fort und kooperiert als Rückenschullehrer unter anderem mit dem Bildungswerk des Landessportverbandes Schleswig-Holstein (LSV-SH), dem Vie Vitale beim EMTV in Elmshorn und der DAK in Hamburg.
        </p>
        <p>
          Freiberuflich ist Achim von 1994 bis 1996 als Gesundheitsberater im Sport (LSV) mit den Schwerpunkten Diabetes- und Cardiofitness sowie als Studioleiter aktiv. Er wird als Dozent für die Ausbildung zum Gesundheitsberater im Sport (LSV) beim Sport- und Bildungszentrum in Malente sowie in Schulen und gemeinnützigen Bildungseinrichtungen beauftragt.
        </p>
        <p>
          Im Jahre 1999 qualifiziert ihn eine 3-jährige Vollzeitausbildung inklusive Ambulatorium an der ARCANA Fachverbandsschule Deutscher Heilpraktiker e.V. in Hamburg zum Heilpraktiker. Achim praktiziert die Neuraltherapie nach Huneke und wird Chiropraktiker nach Dr. Ackermann / Stockholm / Schweden.
        </p>
        <p>Im Januar 2000 ist die Eröffnung seiner Praxis für Ganzheitliche Medizin im medizinischen Versorgungszentrum Hamburg-Winterhude.</p>
        <p>
          Sein berufsbegleitendes Osteopathie-Studium beginnt 2002 an der Osteopathieschule Deutschland (OSD) in Hamburg. Achim setzt sein Studium nach kurzer Unterbrechung als junger Familienvater an der ehemaligen Osteopathieschule Damp weiter fort. In dieser Zeit gründet Dr. med. Edgar Hinkelthein seine{" "}
          <NewTabLink href={links.aon} className="text-navy underline decoration-gold underline-offset-4">Akademie für Osteopathie und Naturheilverfahren (AON)</NewTabLink> in Kiel. Hier beendet Achim 2013 mit erfolgreichem und gutem Abschluss sein sehr umfangreiches 10-jähriges Osteopathie-Studium (AFO).
        </p>
        <p>Seit 2004 lebt Achim Heck im Norden Hamburgs mit seiner Familie in Nachbarschaft zum Hamburger Flughafen und praktiziert hier im eigenen Haus.</p>
      </article>
    </section>
    </>
  );
}
