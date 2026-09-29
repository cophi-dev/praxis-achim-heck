import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Infos",
  description: "Wissenswertes zu Osteopathie, Ursachen-Folge-Ketten, Darm-Hirn-Achse, Sarkopenie, Gesundheits-ABO und Experten Allianz – Praxis Achim Heck.",
};

export default function InfosPage() {
  return (
    <>
    <PageHero kicker="Infos" title="Hier sind Sie in sicheren Händen" lead="30 Jahre Erfahrung, ein abgeschlossenes Osteopathiestudium gemäß der Richtlinien der Akademie für Osteopathie (AFO), regelmäßige Fortbildungen, Mitglied im Verband der Osteopathen Deutschland e.V. (VOD) und im Experten Allianz für Sport, Fitness & Gesundheit e.V." />
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-6 md:grid-cols-3">
        <Link href="#wissen" className="border border-ink/8 p-7 transition hover:border-gold">
  <p className="text-[0.7rem] tracking-[0.2em] text-gold">01</p>
  <h2 className="serif mt-3 text-2xl text-navy">Wissenswertes</h2>
  <p className="mt-3 text-sm leading-relaxed text-muted">Ursachen-Folge-Ketten, Darm-Hirn-Achse und Sarkopenie – verständlich erklärt.</p>
</Link><Link href="/infos/heilungsverlauf" className="border border-ink/8 p-7 transition hover:border-gold">
  <p className="text-[0.7rem] tracking-[0.2em] text-gold">02</p>
  <h2 className="serif mt-3 text-2xl text-navy">Motiv & Heilungsverlauf</h2>
  <p className="mt-3 text-sm leading-relaxed text-muted">Intrinsische Motivation und das Tagebuch eines erfolgreichen Heilungsverlaufs.</p>
</Link><Link href="#allianz" className="border border-ink/8 p-7 transition hover:border-gold">
  <p className="text-[0.7rem] tracking-[0.2em] text-gold">03</p>
  <h2 className="serif mt-3 text-2xl text-navy">Experten Allianz</h2>
  <p className="mt-3 text-sm leading-relaxed text-muted">Mitgliedsunternehmen für Sport, Fitness & Gesundheit e.V.</p>
</Link>
      </div>
    </section>
    <section id="wissen" className="scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-[0.7rem] tracking-[0.24em] text-gold uppercase">Wissenswertes</p>
        <h2 className="serif mt-3 text-4xl text-navy">Was sind eigentlich Ursachen-Folge-Ketten?</h2>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            Bei Rückenleiden im Alltag oder nach Sportverletzungen kann es zu biomechanischen Störungen des Bewegungsapparates kommen. Zum Beispiel kann bereits eine einfache Fußwurzelblockade auf diesem Wege Nackenschmerzen, Schulter-Arm-Syndrome, Ischiasreizungen, ein sogenannter Hexenschuss oder Bandscheibenvorfälle, ja sogar Herz-Kreislauf-Störungen und Magen-Darm-Probleme mitverursachen.
          </p>
          <p>
            Qualifizierte Osteopathen können jede einzelne Gelenk- und Organfunktion manuell überprüfen und Bewegungen sowie den Stoffwechsel therapeutisch mit osteopathischen Techniken verbessern. So kann der Organismus bei seiner Selbstregulation unterstützt werden. Dies trägt zum Gleichgewicht sämtlicher Flüssigkeiten, der sogenannten Homöostase, im Körper bei.
          </p>
        </div>
        <h2 className="serif mt-16 text-4xl text-navy">Was bedeutet die sogenannte Darm-Hirn-Achse?</h2>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            Elektrische Signale werden über Nervenbahnen vom Darm ins Gehirn geleitet. Aufgenommene Nährstoffe interagieren so über die sogenannte Darm-Hirn-Achse. Auf diesem Informationsweg werden gezielt Hormone gebildet, die im Gehirn unterschiedliche Reaktionen auslösen.
          </p>
          <p>
            Sobald wir Nahrung aufnehmen, werden unsere Darmbakterien beeinflusst. Die Zusammensetzung der Darmflora ist genetisch individuell, aber auch von Umwelteinflüssen und der Ernährung abhängig. Jede Form von Stress erhöht die Durchlässigkeit der Darmschleimhaut und führt zu Entzündungen im Körper.
          </p>
          <p>
            Entzündungen sind zunächst ein normaler Vorgang und gehören zur gesunden Verdauung, da alles, was wir essen, vom Abwehrsystem geprüft werden muss. Zu viel zuckerhaltige Lebensmittel und tierische Fette provozieren Entzündungen zusätzlich. Die Dosis macht das Gift.
          </p>
          <p>
            Über 90 % des Glückshormons Serotonin werden im Darm gebildet. Wenn Sie sich überwiegend gesund ernähren, kann sich Ihre Darmflora gut erholen. Zum Beispiel soll probiotischer Joghurt zur Depressionsprophylaxe beitragen können. Leiden Sie bereits an einer Depression, ist ärztlicher Rat selbstverständlich ratsam.
          </p>
        </div>
        <h2 className="serif mt-16 text-4xl text-navy">Sarkopenie betrifft uns alle</h2>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            Unser Körperwachstum ist zwischen dem 18. und 25. Lebensjahr abgeschlossen. Danach beginnt ein natürlicher Alterungs- und Abbauprozess. Die Muskulatur verliert von Jahr zu Jahr etwa 1 % Muskelmasse. Diesen Abbau bezeichnete Dr. Irwin H. Rosenberg 1988 als Sarkopenie.
          </p>
          <p>
            Eine Sonderform nennt sich sarkopene Adipositas, bei der Fettleibigkeit den Muskelschwund maskiert – mit dem Risiko von Fehldiagnosen. Seit etwa zehn Jahren weiß die Wissenschaft, dass unsere Muskulatur nicht bloß Halte- und Stützfunktion hat, sondern aufgrund von Botenstoffen, sogenannter Myokine, als Immun-, Hormon- und wichtigstes Stoffwechselorgan zu bezeichnen ist.
          </p>
          <p>
            Testen Sie Ihren Händedruck, das sichere Aufstehen und Hinsetzen sowie Ihr koordiniertes Gangbild. Gesundheit ist Wohlbefinden und ein immer wiederkehrender Prozess. Ernährung, Schlaf, Stress, das soziale Umfeld und unsere Gedanken spielen eine besondere Rolle, wenn wir nachhaltig etwas verändern wollen.
          </p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-[0.7rem] tracking-[0.24em] text-gold uppercase">Motivatar</p>
          <h2 className="serif mt-3 text-4xl text-navy">Gesundheit und Wohlbefinden</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Mit intrinsischer (lat. intrinsecus = „innerlich“) Motivation (lat. motus = Bewegung) den Motor unseres Handelns aus eigenem Antrieb in Bewegung bringen, um Veränderungen für unsere Ziele zu erreichen.
          </p>
          <p className="mt-4 leading-relaxed text-muted">Ein Beispiel für intrinsische Motivation: das Tagebuch eines erfolgreichen Heilungsverlaufs – mehrfach gebrochener Finger ohne OP in nur vier Wochen.</p>
          <Link href="/infos/heilungsverlauf" className="mt-8 inline-flex rounded-full bg-navy px-7 py-3 text-[0.72rem] tracking-[0.16em] text-cream uppercase">Heilungsverlauf lesen</Link>
        </div>
        <blockquote className="border-l-2 border-gold bg-cream p-8">
          <p className="serif text-3xl text-navy">„Leben ist Bewegung, Bewegung ist Leben!“</p>
          <p className="mt-4 text-sm text-muted">Achim Heck, Juli 2023</p>
        </blockquote>
      </div>
    </section>
    <section id="allianz" className="scroll-mt-28 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-24">
        <Image src="/images/experten-allianz.jpg" alt="Logo Experten Allianz für Gesundheit e.V." width={221} height={179} className="bg-white p-4" />
        <div>
          <h2 className="serif text-4xl text-navy">Experten Allianz für Sport, Fitness & Gesundheit e.V.</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Diese Praxis ist ein Mitgliedsunternehmen des Experten Allianz für Sport, Fitness & Gesundheit e.V. „Gesundheit braucht Training!“ – ein Zusammenschluss aus Fachleuten verschiedener Gesundheits- und Wissenschaftsdisziplinen als Interessenvertretung in Politik, Gesellschaft und Wissenschaft.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
