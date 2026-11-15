import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pengu Tasks · Landing page template",
  description: "Open-source landing page template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
