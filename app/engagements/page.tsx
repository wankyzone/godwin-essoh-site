import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academic Engagements & Conferences",
  description:
    "Selected conferences, papers, workshops, seminars, and public lectures involving Godwin Edet Essoh.",
  alternates: {
    canonical: siteOrigin
      ? new URL(withBasePath("/engagements.html"), siteOrigin).toString()
      : undefined,
  },
};

const conferences = [
  "Seventh African Regional Conference on Sustainable Development, University of Abuja, Nigeria (June 2014).",
  "National Workshop of Stakeholders of Peace Research and Conflict Resolution, Abuja, Nigeria (March 2015).",
];

const papers = [
  "Cottage Industries, SMEs, and Community Development. Sensitization Training Workshop, Ikono LGA, Akwa Ibom State (2018).",
  "Public Enterprises Reform and National Development: Lessons from Nigeria’s Privatization and Commercialization. African Regional Conference on Sustainable Development, Abuja (2014).",
];

const workshops = [
  "Writing and Publishing in High Impact Journals, Ritman University (2025).",
  "Global Best Practices in Teaching and Learning, Ritman University (2022).",
  "Capacity Building Workshop for Academic Staff, Salem University (2013).",
  "Quality Assurance Sensitization Seminar, Salem University (2013).",
];

export default function EngagementsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a9812f]">
        Scholarly Participation
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#142b3b] sm:text-5xl">
        Academic engagements and conferences
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-[#596571]">
        Dr. Essoh has participated in academic conferences, workshops, seminars
        and public lectures, contributing to scholarly discussion and
        professional capacity building in public administration and development
        studies.
      </p>

      <section className="mt-14 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Conferences attended</h2>
        <ul className="mt-5 space-y-4">
          {conferences.map((item) => <li key={item} className="border-b border-[#deded8] pb-4">{item}</li>)}
        </ul>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Papers presented</h2>
        <ul className="mt-5 space-y-4">
          {papers.map((item) => <li key={item} className="border-b border-[#deded8] pb-4">{item}</li>)}
        </ul>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Workshops and seminars</h2>
        <ul className="mt-5 space-y-4">
          {workshops.map((item) => <li key={item} className="border-b border-[#deded8] pb-4">{item}</li>)}
        </ul>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Public lectures and professional service
        </h2>
        <p className="mt-4 max-w-3xl">
          “Public Administration and National Development.” Seminar organized
          by the Association of Public Administration Students, Salem
          University (2014).
        </p>
      </section>
    </main>
  );
}
