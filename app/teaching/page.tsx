import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teaching & Supervision",
  description:
    "Teaching philosophy, courses, curriculum development, and student supervision of Godwin Edet Essoh.",
  alternates: {
    canonical: siteOrigin
      ? new URL(withBasePath("/teaching.html"), siteOrigin).toString()
      : undefined,
  },
};

const courses = [
  "Public Administration",
  "Public Policy Analysis",
  "Employment Relations",
  "Human Resource Management",
  "Industrial Relations",
  "Peace and Conflict Studies",
  "Development Studies",
  "Management Principles",
];

export default function TeachingPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a9812f]">
        Teaching & Mentorship
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#142b3b] sm:text-5xl">
        Teaching, supervision and academic development
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-[#596571]">
        Dr. Godwin Edet Essoh has extensive teaching experience at undergraduate
        and postgraduate levels, with a commitment to academic excellence,
        mentorship and applied learning.
      </p>

      <section className="mt-14 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Teaching philosophy</h2>
        <p className="mt-4 max-w-3xl">
          My teaching approach emphasizes critical thinking, practical
          application of theory and student engagement. I encourage analytical
          reasoning, ethical reflection and real-world problem solving,
          particularly within public administration, governance and human
          resource management.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Courses taught</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {courses.map((course) => (
            <li key={course} className="border border-[#deded8] bg-white/60 p-4">
              {course}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Curriculum and programme development
        </h2>
        <p className="mt-4 max-w-3xl">
          Dr. Essoh has contributed to curriculum design and the development of
          undergraduate and postgraduate programmes in Peace and Development
          Studies and Public Administration. The source biography reports that
          several of these programmes achieved full National Universities
          Commission (NUC) accreditation.
        </p>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Student supervision
        </h2>
        <p className="mt-4 max-w-3xl">
          His supervision experience spans undergraduate projects and
          postgraduate theses across Public Administration, Industrial
          Relations, Business Administration and Development Studies.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-6">
          <li>Undergraduate projects at Ritman University, Salem University and NOUN.</li>
          <li>Master’s theses in Public Administration and Business Administration.</li>
          <li>Academic mentorship for final-year students and early-career researchers.</li>
        </ul>
      </section>
    </main>
  );
}
