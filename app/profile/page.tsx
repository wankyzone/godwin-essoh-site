import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academic Profile",
  description:
    "Academic biography, qualifications, research interests, and professional memberships of Godwin Edet Essoh, Ph.D.",
  alternates: siteOrigin
    ? { canonical: new URL(withBasePath("/profile.html"), siteOrigin) }
    : undefined,
};

const interests = [
  "Public Administration and Public Policy",
  "Employment Relations and Human Resource Management",
  "Governance and Institutional Reform",
  "Peace, Conflict Resolution, and Development Studies",
  "Public Sector Performance and Workforce Development",
];

export default function ProfilePage() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          About the scholar
        </p>
        <h1 className="mt-4 text-4xl tracking-tight text-[var(--navy)] sm:text-5xl">
          Academic Profile
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Godwin Edet Essoh, Ph.D., is a senior academic and public
          administration scholar whose work spans teaching, research, academic
          leadership, and institutional governance.
        </p>

        <div className="mt-12 grid gap-12 border-t border-[var(--line)] pt-10 md:grid-cols-[1.5fr_1fr]">
          <article>
            <h2 className="text-2xl text-[var(--navy)]">
              Biography
            </h2>
            <div className="mt-5 space-y-5 leading-8">
              <p>
                He serves as a Senior Lecturer and Acting Dean of the Faculty
                of Social and Management Sciences at Ritman University, Ikot
                Ekpene, Nigeria.
              </p>
              <p>
                His academic qualifications include a Doctor of Philosophy
                (Ph.D.) in Public Administration and Policy Analysis, a Master
                of Public Administration (MPA), and a Bachelor of Science
                degree in Business Management. His academic training spans
                Nigeria and the United States.
              </p>
            </div>

            <h2 className="mt-10 text-2xl text-[var(--navy)]">
              Research Interests
            </h2>
            <ul className="mt-4 space-y-3">
              {interests.map((interest) => (
                <li
                  className="border-l-2 border-[var(--gold)] pl-4 leading-7"
                  key={interest}
                >
                  {interest}
                </li>
              ))}
            </ul>
          </article>

          <aside className="h-fit border border-[var(--line)] bg-white/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
              Academic appointment
            </p>
            <h2 className="mt-3 text-xl text-[var(--navy)]">
              Ritman University
            </h2>
            <p className="mt-2 leading-7 text-[var(--muted)]">
              Senior Lecturer and Acting Dean, Faculty of Social and
              Management Sciences
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Ikot Ekpene, Nigeria
            </p>

            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <h3 className="font-semibold text-[var(--navy)]">
                Professional Memberships
              </h3>
              <ul className="mt-3 space-y-3 leading-7">
                <li>Fellow, Chartered Institute of Administration (FCIA)</li>
                <li>Fellow, Institute of Corporate Administration</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
