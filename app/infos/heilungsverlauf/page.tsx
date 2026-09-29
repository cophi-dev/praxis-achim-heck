import type { Metadata } from "next";
import Link from "next/link";
import { NewTabLink } from "@/components/NewTabLink";
import { PageHero } from "@/components/PageHero";
import { downloads } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tagebuch eines erfolgreichen Heilungsverlaufs",
  description: "Mehrfach gebrochener Finger ohne OP in nur vier Wochen – ein Beispiel für intrinsische Motivation aus der Praxis Achim Heck.",
};

export default function HeilungsverlaufPage() {
  return (
    <>
    <PageHero kicker="Motivatar" title="Tagebuch eines erfolgreichen Heilungsverlaufs" lead="Mehrfach gebrochener Finger ohne OP in nur vier Wochen. Ein Beispiel für intrinsische Motivation." />
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm text-muted">
        Originaldokument aus der bestehenden Website – hier vollständig lesbar.{" "}<NewTabLink className="text-navy underline decoration-gold underline-offset-4" href={downloads.tagebuch.href}>PDF herunterladen</NewTabLink>
      </p>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">11. Juni 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Unfall und Notaufnahme</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Sturz im Garten von einer Leiter, die seitlich kippt, während ich versuche, mich an einem Eisenring festzuhalten. Zwei Finger der rechten Hand sind völlig ausgerenkt. Ich richte sie im Schockzustand sofort wieder ein und kühle mit Eis. In der Notaufnahme der Asklepios Klinik Nord Heidberg dauert es Stunden, bis geröntgt und eine Unterarm-/Handschiene angelegt wird. Später die Mitteilung: Bitte morgen den Chirurgen anrufen und die anstehende Operation besprechen.
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">13. Juni 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Beim Handchirurgen</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Dr. J. bestätigt: keine Knochenfragmente im Gelenk. Auf die Frage, ob eine Operation nötig sei, antwortet er: „Sie müssen es allerdings allein hinkriegen. Ich kann Ihnen nichts verordnen.“ Kontrolltermin in drei Wochen. Der Heimweg zu Fuß beginnt bereits mit der kleinen Reha – Kneten der Kältepackung.
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">14.–19. Juni 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Kühlung, Bewegung, Öle</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Kombination aus Kühlen, Hochlagern und Bewegen: zuerst osteopathische Techniken, dann moderate Physiotherapie. Ätherische Öle (PanAway, Cypress, Helichrysum, Valor II) unterstützend. Am Tag 3 bereits vorsichtig Klavier: „Happy Birthday“. Erste Praxisanrufe – Neuanmeldungen müssen abgesagt werden. Geduld.
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">Ende Juni</p>
        <h2 className="serif mt-2 text-3xl text-navy">Win-win: Lymphdrainage geben</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Sobald Zug, Druck oder mobilisierende Techniken den Stoffwechsel der Faszien anregen, verbessert sich die zelluläre Heilung. Die manuelle Lymphdrainage, die Achim einem Patienten gibt, wirkt zugleich heilend auf die eigenen Fingerbrüche. Am 30. Juni kann Schwager Carsten beinahe wie gewohnt behandelt werden.
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">4. Juli 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Kontrolle</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            4,2 km Fußweg mit Eisbeutel in die Klinik. Die Finger sind beweglicher und relativ schlank. Bericht: Klavier gespielt, Lymphdrainage gegeben, osteopathische Behandlung mit Massage. Nächste Woche wieder arbeiten. Der Chirurg: „Dann sehen wir uns am 8. August wieder.“
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">5.–9. Juli 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Das große Glück</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>
            Die beherzte Erste Hilfe am Unfalltag hat Schlimmeres verhindert. Eine Operation hätte die Finger 3 und 4 der rechten Hand in erzwungener Stellung fixiert – eine Tätigkeit als Osteopath wäre unmöglich gewesen. Der 10. Juli wird als erster offizieller Arbeitsbeginn nach genau vier Wochen festgesetzt. Der Terminkalender der folgenden Woche füllt sich.
          </p>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">10. Juli 2023</p>
        <h2 className="serif mt-2 text-3xl text-navy">Wieder in der Praxis</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <blockquote className="serif text-3xl text-navy">„Leben ist Bewegung, Bewegung ist Leben!“</blockquote>
        </div>
      </section>
      <section className="mt-14">
        <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">2025</p>
        <h2 className="serif mt-2 text-3xl text-navy">Ausblick</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          <p>Die Finger lassen sich fast vollständig beugen. Beide Hände können gut zur Faust geballt werden. Nächstes Ziel: Handstand-Push-Ups. Gesundheit ist Wohlbefinden.</p>
        </div>
      </section>
      <div className="mt-16 flex flex-wrap gap-4">
        <Link href="/infos" className="text-[0.72rem] tracking-[0.16em] text-navy uppercase">← Zurück zu Infos</Link><Link href="/kontakt" className="rounded-full bg-navy px-6 py-3 text-[0.72rem] tracking-[0.16em] text-cream uppercase">Termin anfragen</Link>
      </div>
    </article>
    </>
  );
}
