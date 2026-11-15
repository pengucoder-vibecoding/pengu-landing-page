import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:justify-between py-8 text-sm text-muted">
        <p>© {site.name}. Template by Pengu Coder.</p>
        <a href="https://github.com/pengucoder-vibecoding/pengu-landing-page" className="hover:text-text">
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
