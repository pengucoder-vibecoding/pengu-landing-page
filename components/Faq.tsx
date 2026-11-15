import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Questions</h2>
      <div className="mt-10 space-y-4">
        {faq.map((item) => (
          <details key={item.q} className="rounded-xl border border-border bg-surface p-5">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-3 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
