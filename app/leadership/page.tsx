import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academic Leadership",
  description:
    "Academic leadership, university administration, committee service, and programme accreditation experience of Godwin Edet Essoh.",
  alternates: {
    canonical: siteOrigin
      ? new URL(withBasePath("/leadership.html"), siteOrigin).toString()
      : undefined,
  },
};

const currentRoles = [
  ["Acting Dean", "Faculty of Social and Management Sciences, Ritman University", "2022–Present"],
  ["Chairman", "Senate Committee on Mid-Semester Examinations, Ritman University", "2025–Present"],
  ["Coordinator", "Department of Political Science & Public Administration, Ritman University", "2025–Present"],
];

const previousRoles = [
  ["Head of Department", "Employment Relations & Human Resource Management, Ritman University", "2015–2022"],
  ["Head of Department", "Management, Ritman University", "2020–2022"],
  ["Director", "Centre for Entrepreneurship, Ritman University", "2016–2023"],
  ["Programme Coordinator", "Peace and Development Studies, Salem University", "2013–2015"],
];

const committees = [
  "University Senate, Ritman University",
  "Senate Committee on Staff Discipline",
  "Examinations Committee",
  "Academic Planning Committee",
  "Senate Committee on Campus Discipline",
  "Senate Committee on NUC BMAS Quality Assurance",
  "Senate Committee on Carry-Over Programme (Chairman)",
];

function RoleList({
  items,
}: {
  items: string[][];
}) {
  return (
    <div className="mt-6 space-y-4">
      {items.map(([role, organization, dates]) => (
        <article key={`${role}-${organization}`} className="border-l-2 border-[#a9812f] pl-5">
          <h3 className="font-semibold text-[#142b3b]">{role}</h3>
          <p>{organization}</p>
          <p className="mt-1 text-sm text-[#596571]">{dates}</p>
        </article>
      ))}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a9812f]">
        Service & Administration
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#142b3b] sm:text-5xl">
        Academic leadership and institutional service
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-[#596571]">
        Dr. Godwin Edet Essoh has held senior academic leadership and
        administrative positions across Nigerian universities, spanning faculty
        administration, departmental management, academic governance and
        programme accreditation.
      </p>

      <section className="mt-14 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Current appointments</h2>
        <RoleList items={currentRoles} />
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">Previous leadership roles</h2>
        <RoleList items={previousRoles} />
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          University governance and committees
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {committees.map((committee) => (
            <li key={committee} className="border border-[#deded8] bg-white/60 p-4">
              {committee}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-[#deded8] pt-8">
        <h2 className="text-2xl font-semibold text-[#142b3b]">
          Programme accreditation and institutional impact
        </h2>
        <p className="mt-4 max-w-3xl">
          The supplied biography records that Dr. Essoh led academic programmes
          through National Universities Commission accreditation exercises,
          achieving full accreditation status across departments and faculties
          under his leadership.
        </p>
      </section>
    </main>
  );
}
