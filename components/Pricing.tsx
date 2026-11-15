import { pricing } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Simple pricing</h2>
      <p className="mt-3 text-center text-sm text-muted">{pricing.note}</p>
      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 ${plan.highlighted ? "border-brand bg-surface" : "border-border"}`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-4">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              <span className="ml-2 text-muted">{plan.period}</span>
            </p>
            <ul className="mt-6 space-y-2 text-muted">
              {plan.features.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={`mt-8 block rounded-lg px-4 py-3 text-center font-semibold ${plan.highlighted ? "bg-brand text-bg" : "border border-border"}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
