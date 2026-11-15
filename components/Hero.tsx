import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">{hero.eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">{hero.subtitle}</p>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <a href={hero.primaryCta.href} className="rounded-lg bg-brand px-6 py-3 font-semibold text-bg">
          {hero.primaryCta.label}
        </a>
        <a href={hero.secondaryCta.href} className="rounded-lg border border-border px-6 py-3 font-semibold">
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
