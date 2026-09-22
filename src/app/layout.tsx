import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/context/PreferencesContext";

export const metadata: Metadata = {
  title: "Mega Afú — Senior Software Engineer | Mobile & Distributed Systems",
  description: "Senior Software Engineer with 5+ years architecting resilient, offline-first mobile systems, high-throughput backend APIs, and pragmatic AI workflows engineered under real African telecom and fintech constraints.",
  keywords: [
    "Mega Afú",
    "Senior Software Engineer",
    "Mobile Architect",
    "Flutter",
    "Next.js",
    "Distributed Systems",
    "Fintech",
    "Telecom",
    "Maputo Mozambique"
  ],
  authors: [{ name: "Mega Afú", url: "https://github.com/megaafu" }],
  openGraph: {
    title: "Mega Afú — Senior Software Engineer | Mobile & Distributed Systems",
    description: "Understand deeply. Build simply. Improve continuously.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[var(--surface-bg)] text-[var(--text-primary)] antialiased selection:bg-amber-gold selection:text-[#0c0e12] min-h-screen relative overflow-x-hidden">
        <PreferencesProvider>
          {children}
        </PreferencesProvider>
      </body>
    </html>
  );
}

