import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Academic and professional contact information for Godwin Edet Essoh at Ritman University, Ikot Ekpene, Nigeria.",
  alternates: {
    canonical: siteOrigin
      ? new URL(withBasePath("/contact.html"), siteOrigin).toString()
      : undefined,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a9812f]">
        Academic Correspondence
      </p>
      <h1 className="text-4xl font-semibold leading-tight text-[#142b3b] sm:text-5xl">
        Contact
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[#596571]">
        For academic, research and professional enquiries, use the contact
        information below.
      </p>

      <section className="mt-12 border border-[#deded8] bg-white/60 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Institutional affiliation
        </h2>
        <p className="mt-4">
          Department of Employment Relations and Human Resource Management
          <br />
          Ritman University
          <br />
          Ikot Ekpene, Akwa Ibom State, Nigeria
        </p>

        <div className="mt-8 border-t border-[#deded8] pt-6">
          <h2 className="text-2xl font-semibold text-[#142b3b]">Email</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a className="font-semibold text-[#142b3b] underline" href="mailto:essohgodwin@gmail.com">
                essohgodwin@gmail.com
              </a>
            </li>
            <li>
              <a className="font-semibold text-[#142b3b] underline" href="mailto:essoh.godwin@ritmanuniversity.edu.ng">
                essoh.godwin@ritmanuniversity.edu.ng
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 border-t border-[#deded8] pt-6">
          <h2 className="text-2xl font-semibold text-[#142b3b]">Curriculum vitae</h2>
          <p className="mt-3">
            Contact Dr. Essoh to request a copy of his full academic CV.
          </p>
          <a
            className="mt-4 inline-flex bg-[#142b3b] px-5 py-3 font-semibold text-white no-underline hover:bg-[#203f54]"
            href={withBasePath("/cv.html")}
          >
            View curriculum vitae
          </a>
        </div>
      </section>
    </main>
  );
}
