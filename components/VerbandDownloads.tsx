import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowOutIcon, ArrowRightIcon, BadgeIcon, FilePdfIcon, GraduationIcon, ReceiptIcon } from "@/components/icons";
import { NewTabLink } from "@/components/NewTabLink";
import { downloads, links } from "@/lib/site";

type Item = {
  href: string;
  label: string;
  context: string;
  meta: string;
  icon: ReactNode;
  internal?: boolean;
};

const iconClass = "size-5";

const items: Item[] = [
  {
    href: links.vod,
    label: "Verband der Osteopathen Deutschland e.V. (VOD)",
    context: "Fachverband · Mitglied im VOD",
    meta: "osteopathie.de",
    icon: <BadgeIcon className={iconClass} />,
  },
  {
    href: links.afoAusbildung,
    label: "Akademie für Osteopathie (AFO)",
    context: "Ausbildung · Osteopathiestudium gemäß den Richtlinien der AFO",
    meta: "osteopathie-akademie.de",
    icon: <GraduationIcon className={iconClass} />,
  },
  {
    href: links.aon,
    label: "Akademie für Osteopathie und Naturheilverfahren (AON)",
    context: "Ausbildung · Abschluss des Osteopathie-Studiums 2013 in Kiel",
    meta: "osteopathie-aon.de",
    icon: <GraduationIcon className={iconClass} />,
  },
  {
    href: "/infos#allianz",
    label: "Experten Allianz für Sport, Fitness & Gesundheit e.V.",
    context: "Mitgliedschaft · „Gesundheit braucht Training!“",
    meta: "Auf dieser Seite",
    icon: <Image src="/images/experten-allianz.jpg" alt="" width={221} height={179} className="h-full w-full object-contain p-1" />,
    internal: true,
  },
  {
    href: links.osteokompass,
    label: "Osteokompass",
    context: "Kostenerstattung · Zuschüsse der Krankenkassen für Osteopathie",
    meta: "osteokompass.de",
    icon: <ReceiptIcon className={iconClass} />,
  },
  {
    href: downloads.tagebuch.href,
    label: downloads.tagebuch.title,
    context: "Download · Mehrfach gebrochener Finger ohne OP in nur vier Wochen",
    meta: downloads.tagebuch.meta,
    icon: <FilePdfIcon className={iconClass} />,
  },
];

const rowClass =
  "group flex min-h-14 items-center gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:gap-6";

function RowContent({ item }: { item: Item }) {
  return (
    <>
      <span
        className={`flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/50 ${item.internal ? "bg-white" : "text-gold"}`}
      >
        {item.icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-8">
        <span className="min-w-0">
          <span className="block font-medium text-navy decoration-gold underline-offset-4 group-hover:underline group-focus-visible:underline">
            {item.label}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-muted">{item.context}</span>
        </span>
        <span className="text-[0.72rem] tracking-[0.12em] break-words text-muted md:shrink-0 md:text-right">{item.meta}</span>
      </span>
      {item.internal ? (
        <ArrowRightIcon className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
      ) : (
        <ArrowOutIcon className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
      )}
    </>
  );
}

export function VerbandDownloads() {
  return (
    <section id="verband" className="scroll-mt-28 border-t border-ink/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8 md:py-24">
        <div>
          <p className="text-[0.7rem] tracking-[0.24em] text-gold uppercase">Mitgliedschaften & Links</p>
          <h2 className="serif mt-3 text-4xl text-navy">Verband & Downloads</h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 leading-relaxed text-muted">
            Fachverband, Ausbildungsstätten, Zuschüsse der Krankenkassen und das Tagebuch eines Heilungsverlaufs zum Nachlesen – alles auf einen Blick.
          </p>
        </div>
        <ul className="divide-y divide-ink/8 border-y border-ink/8">
          {items.map((item) => (
            <li key={item.href}>
              {item.internal ? (
                <Link href={item.href} className={rowClass}>
                  <RowContent item={item} />
                </Link>
              ) : (
                <NewTabLink href={item.href} className={rowClass}>
                  <RowContent item={item} />
                </NewTabLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
