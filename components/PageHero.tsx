export function PageHero({ kicker, title, lead }: { kicker?: string; title: string; lead?: string }) {
  return (
    <section className="bg-navy pt-28 pb-16 text-cream md:pt-36 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {kicker && <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">{kicker}</p>}
        <h1 className="serif mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand md:text-lg">{lead}</p>}
      </div>
    </section>
  );
}
