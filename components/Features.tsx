import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything a small team needs</h2>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-surface p-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand" aria-hidden="true">
              <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
