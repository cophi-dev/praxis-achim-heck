"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/95 shadow-[0_1px_0_rgba(22,24,31,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Logo Achim Heck" width={44} height={44} className="h-10 w-10 object-contain md:h-11 md:w-11" priority />
          <span className="leading-tight">
            <span className="block font-medium tracking-[0.18em] text-[0.7rem] text-navy uppercase md:text-xs">Achim Heck</span>
            <span className="hidden text-[0.7rem] text-muted sm:block">Heilpraktiker · Osteopath</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`text-[0.8rem] tracking-[0.14em] uppercase transition-colors ${active ? "text-navy" : "text-muted hover:text-navy"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/kontakt" className="hidden rounded-full bg-navy px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.16em] text-cream uppercase transition hover:bg-brand sm:inline-flex">Termin anfragen</Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 lg:hidden" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">Menü</span>
            <span className="relative block h-3.5 w-5">
              <span className={`absolute inset-x-0 top-0 h-px bg-navy transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-1.5 h-px bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 top-3 h-px bg-navy transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-ink/6 py-4 font-serif text-2xl text-navy">{item.label}</Link>
            ))}
            <Link href="/kontakt" className="mt-6 rounded-full bg-navy px-5 py-3.5 text-center text-sm tracking-[0.16em] text-cream uppercase">Termin anfragen</Link>
            <a href={site.phoneHref} className="mt-3 text-center text-sm text-muted">{site.phone}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
