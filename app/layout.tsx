import type { Metadata, Viewport } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteOrigin } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    default: "Godwin Edet Essoh, Ph.D. | Academic Profile",
    template: "%s | Godwin Edet Essoh",
  },
  description:
    "Academic profile of Godwin Edet Essoh, with information on research, teaching, publications, and academic leadership.",
  openGraph: {
    type: "website",
    title: "Godwin Edet Essoh, Ph.D. | Academic Profile",
    description:
      "Academic profile, research interests, teaching, publications, and academic leadership.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a
          className="skip-link"
          href="#main-content"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
