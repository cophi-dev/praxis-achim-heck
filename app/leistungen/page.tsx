import type { Metadata } from "next";
import Link from "next/link";
import { NewTabLink } from "@/components/NewTabLink";
import { PageHero } from "@/components/PageHero";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Osteopathie, Physiotherapie, Chiropraktik, Faszientherapie, Lymphdrainage und Gesundheitscoaching in der Praxis Achim Heck, Hamburg-Langenhorn.",
};

export default function LeistungenPage() {
  return (
    <>
    <PageHero kicker="Leistungen" title="Ursächlich behandeln, Gesundheit stärken" lead="Nach einem ausführlichen Anamnesegespräch, einer qualifizierten osteopathischen Untersuchung und den ggf. notwendigen Röntgen-, Labor- oder Facharztuntersuchungen wird differenzialdiagnostisch geklärt, ob und welche Therapien indiziert sind." />
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-lg leading-relaxed text-muted">
        Ganzheitliche Gesundheit bedeutet auch eine gesunde Ernährung unter Berücksichtigung der individuellen psycho-sozialen Lebenssituation, um motivierende Lösungen für notwendige Veränderungen im Alltag zu erreichen.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="border border-ink/8 bg-cream p-6">
          <p className="text-[0.7rem] tracking-[0.2em] text-gold">
            0{1}
          </p>
          <p className="mt-3 font-medium text-navy">Ursächlich Beschwerden lindern und die Gesundheit stärken</p>
        </div>
        <div className="border border-ink/8 bg-cream p-6">
          <p className="text-[0.7rem] tracking-[0.2em] text-gold">
            0{2}
          </p>
          <p className="mt-3 font-medium text-navy">Die Selbstheilungskräfte anregen und Homöostase wiederherstellen</p>
        </div>
        <div className="border border-ink/8 bg-cream p-6">
          <p className="text-[0.7rem] tracking-[0.2em] text-gold">
            0{3}
          </p>
          <p className="mt-3 font-medium text-navy">Mit intrinsischer Motivation gesunde Ziele erreichen</p>
        </div>
      </div>
    </section>
    <section id="osteo" className="scroll-mt-28 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase md:col-span-3">01 — Osteo</p>
        <div className="md:col-span-9">
          <h2 className="serif text-4xl text-navy md:text-5xl">Osteopathie</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Osteopathie ist eine Heilkunde mit ganzheitlichen Prinzipien, die sich mit den Ursachen und der Erforschung von Krankheiten beschäftigt. Ein Osteopath diagnostiziert und therapiert vom Kopf bis zu den Füßen – nicht nur die Wirbelsäule, sondern auch Bänder, Gelenke, Knochen und Muskeln sowie alle myofaszialen Verbindungen sämtlicher Organe.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Ein qualifizierter Osteopath beurteilt stets das parietale, viszerale und kraniosakrale Organsystem, um eine ganzheitliche, differenzierte Diagnose und Therapie gewährleisten zu können.
          </p>
          <p className="mt-6 text-sm">
            Mehr zur Osteopathie beim{" "}<NewTabLink className="text-navy underline decoration-gold underline-offset-4" href={links.vod}>Verband der Osteopathen (VOD)</NewTabLink>.
          </p>
        </div>
      </div>
    </section>
    <section id="physio" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase md:col-span-3">02 — Physio</p>
        <div className="md:col-span-9">
          <h2 className="serif text-4xl text-navy md:text-5xl">Physiotherapie</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Physikalische Therapien sind unter anderem Wärme, Kälte, Licht, Luft, Wasser, Heilpflanzen, aber auch Faszien-Therapien & Massagen, Lymphdrainagen sowie gezieltes therapeutisches Fitness-Training.
          </p>
          <p className="mt-4 leading-relaxed text-muted">Diese Praxis ist Mitgliedsunternehmen des Experten Allianz für Sport, Fitness & Gesundheit e.V. und steht für Wissenschaft und Know-how.</p>
        </div>
      </div>
    </section>
    <section id="chiro" className="scroll-mt-28 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase md:col-span-3">03 — Chiro</p>
        <div className="md:col-span-9">
          <h2 className="serif text-4xl text-navy md:text-5xl">Chiropraktik</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Chirotherapeuten können mit gezielten Techniken an der Wirbelsäule sowie an anderen Gelenken Blockierungen behandeln und lösen. Qualifizierte Osteopathen behandeln Patienten bei Bedarf auch mit diesen manipulativen, sogenannten HVLA-Techniken (High Velocity Low Amplitude). Diese Techniken sind Teil der parietalen Osteopathie.
          </p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="serif text-4xl text-navy">Weitere Leistungen</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="border border-ink/8 p-7">
          <h3 className="font-medium text-navy">Faszientherapie nach Typaldos (FDM BC)</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Gezielte Behandlung des Faszien-Distorsions-Modells zur Wiederherstellung der Gewebespannung und Beweglichkeit.</p>
        </div>
        <div className="border border-ink/8 p-7">
          <h3 className="font-medium text-navy">Lymphdrainagen (ML / KPE)</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Manuelle Lymphdrainage und komplexe physikalische Entstauungstherapie – langjährige Spezialisierung seit 1992, auch im palliativen Bereich.</p>
        </div>
        <div className="border border-ink/8 p-7">
          <h3 className="font-medium text-navy">Gesundheits- & Fitness Coaching</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Motivierende Begleitung für Training, Alltag und nachhaltige Veränderung – mit intrinsischer Motivation.</p>
        </div>
        <div className="border border-ink/8 p-7">
          <h3 className="font-medium text-navy">Gesundheits-ABO</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Zwölf Termine im Jahr, nur neun bezahlen. Therapie, Erholung oder gezieltes Training – 270 € sparen.</p>
        </div>
      </div>
      <Link href="/kosten" className="mt-10 inline-flex rounded-full bg-navy px-7 py-3 text-[0.72rem] tracking-[0.16em] text-cream uppercase">Honorare ansehen</Link>
    </section>
    </>
  );
}
