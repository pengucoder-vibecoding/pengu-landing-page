import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold">
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-bg"
        >
          Start free
        </a>
      </div>
    </header>
  );
}
