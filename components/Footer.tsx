import Image from "next/image";
import Link from "next/link";
import { legalNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8 md:py-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo Achim Heck" width={48} height={48} className="h-12 w-12 brightness-0 invert" />
            <div>
              <p className="text-sm tracking-[0.2em] uppercase">Achim Heck</p>
              <p className="text-xs text-sand/80">Heilpraktiker · Osteopath (AFO) · Sportphysiotherapeut (VPT)</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-sand/85">Praxis für ganzheitliche Gesundheit im Norden Hamburgs. Osteopathie, Chiropraktik und Sport-Physiotherapie – ursächlich, individuell und mit Know-how.</p>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">Praxis</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-gold">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">Kontakt</p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
            <p>{site.address.street}<br />{site.address.zip} {site.address.city}</p>
            <p><a href={site.phoneHref} className="hover:text-gold">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></p>
            <p className="text-sand/80">{site.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-6">
            <Image src="/images/vod.jpg" alt="Verband der Osteopathen Deutschland e.V." width={88} height={84} className="h-12 w-auto rounded-sm bg-white p-1" />
            <Image src="/images/experten-allianz.jpg" alt="Experten Allianz für Gesundheit e.V." width={110} height={90} className="h-12 w-auto rounded-sm bg-white p-1" />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sand/70">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cream">{item.label}</Link>
            ))}
            <span>© {new Date().getFullYear()} Achim Heck</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
