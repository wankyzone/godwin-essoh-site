import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Curriculum vitae and academic career information for Godwin Edet Essoh.",
  alternates: {
    canonical: siteOrigin
      ? new URL(withBasePath("/cv.html"), siteOrigin).toString()
      : undefined,
  },
};

export default function CVPage() {
  const cvExists = existsSync(join(process.cwd(), "public", "docs", "godwin-essoh-cv.pdf"));

  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a9812f]">
        Academic Record
      </p>
      <h1 className="text-4xl font-semibold leading-tight text-[#142b3b] sm:text-5xl">
        Curriculum vitae
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[#596571]">
        This page provides access to the academic curriculum vitae of Dr. Godwin
        Edet Essoh.
      </p>

      <section className="mt-12 border border-[#deded8] bg-white/60 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Full academic CV
        </h2>
        {cvExists ? (
          <>
            <p className="mt-3">The complete CV is available as a PDF document.</p>
            <a
              className="mt-6 inline-flex bg-[#142b3b] px-5 py-3 font-semibold text-white no-underline hover:bg-[#203f54]"
              href={withBasePath("/docs/godwin-essoh-cv.pdf")}
            >
              Download CV (PDF)
            </a>
          </>
        ) : (
          <p className="mt-3 text-[#596571]">
            The CV PDF is not currently available in this site repository.
            Please use the contact page to request a copy.
          </p>
        )}
        <a
          className="mt-6 block font-semibold text-[#142b3b] underline"
          href={withBasePath("/contact.html")}
        >
          Contact for academic enquiries
        </a>
      </section>
    </main>
  );
}
