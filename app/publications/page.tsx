import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected journal articles and thesis records by Godwin Edet Essoh and co-authors.",
  alternates: siteOrigin
    ? { canonical: new URL(withBasePath("/publications.html"), siteOrigin) }
    : undefined,
};

const articles = [
  {
    year: "2025",
    title:
      "Perceptions of Residents and Workers toward the Environmental Health Effects of a Dumpsite in Uyo, Nigeria",
    authors: "Essoh, G. E., Udofot, J. P., & Udo, O. K.",
    journal: "International Journal of Democracy and Development Studies",
    details: "8(1), 1–27.",
  },
  {
    year: "2024",
    title:
      "The Relevance of Population Census to Economic Development (A Case Study of Nsit Ubium Local Government Area of Akwa Ibom State, Nigeria)",
    authors: "Essoh, G. E., Udo, O. K., & Sampson, M. N.",
    journal: "Journal of Public Administration, Policy and Governance Research (JPAPGR)",
    details: "Vol. 2, No. 4.",
  },
  {
    year: "2024",
    title:
      "Colonialism, Leadership Issues, and Arrested Development of African States: An Appraisal",
    authors: "Essoh, G. E.",
    journal: "International Journal of Contemporary and Trends in Research",
    details: "Vol. 2, Issue No. 3. Eleviv Publishing Group, USA.",
  },
];

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Scholarly work
        </p>
        <h1 className="mt-4 text-4xl tracking-tight text-[var(--navy)] sm:text-5xl">
          Publications
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Journal articles and thesis records documented in the academic
          website.
        </p>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-4">
            <h2 className="text-2xl text-[var(--navy)]">Journal Articles</h2>
            <p className="text-sm text-[var(--muted)]">
              {articles.length} records
            </p>
          </div>
          <div className="divide-y divide-[var(--line)]">
            {articles.map((article) => (
              <article className="py-7 sm:py-8" key={article.title}>
                <p className="text-sm font-semibold text-[var(--gold)]">
                  {article.year}
                </p>
                <h3 className="mt-2 text-xl leading-8 text-[var(--navy)] sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-3 leading-7">{article.authors}</p>
                <p className="mt-1 leading-7 text-[var(--muted)]">
                  <em>{article.journal}</em> — {article.details}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-[var(--line)] pt-8">
          <h2 className="text-2xl text-[var(--navy)]">Theses</h2>
          <article className="mt-5 border border-[var(--line)] bg-white/60 p-6 sm:p-8">
            <p className="text-sm font-semibold text-[var(--gold)]">1990</p>
            <h3 className="mt-2 text-xl text-[var(--navy)]">
              The Politics of Hazardous Waste Control
            </h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              M.P.A. Thesis, University of Oklahoma, Norman, USA.
            </p>
          </article>
        </section>

        <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
          Full-text PDF links and external journal links are not included here
          because the available source records do not establish working URLs.
        </p>

        <a
          className="mt-8 inline-flex font-semibold text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4"
          href={withBasePath("/research.html")}
        >
          Read about the research agenda
        </a>
      </section>
    </main>
  );
}
