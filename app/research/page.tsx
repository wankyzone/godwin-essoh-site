import type { Metadata } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research agenda, central questions, thematic areas, and policy relevance of Godwin Edet Essoh, Ph.D.",
  alternates: siteOrigin
    ? { canonical: new URL(withBasePath("/research.html"), siteOrigin) }
    : undefined,
};

const questions = [
  "How do public institutions influence socio-economic development in developing societies?",
  "What administrative and policy failures contribute to weak governance and state capacity?",
  "How can employment relations and human resource systems improve public sector performance?",
  "What role do leadership and institutional reform play in conflict prevention and resolution?",
];

const themes = [
  {
    number: "01",
    title: "Public sector reform",
    description: "Institutional effectiveness, governance, accountability, and policy implementation.",
  },
  {
    number: "02",
    title: "Employment relations",
    description: "Workforce management and human resource systems in the public sector.",
  },
  {
    number: "03",
    title: "Peace and development",
    description: "Conflict management, post-conflict development, and institutional reform.",
  },
  {
    number: "04",
    title: "Population and environment",
    description: "Population studies, development planning, and environmental governance.",
  },
];

export default function ResearchPage() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Scholarship and policy
        </p>
        <h1 className="mt-4 text-4xl tracking-tight text-[var(--navy)] sm:text-5xl">
          Research Agenda
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Dr. Godwin Edet Essoh’s research explores how public institutions,
          governance systems, and administrative processes shape development
          outcomes in emerging and transitional states.
        </p>

        <section className="mt-14 border-t border-[var(--line)] pt-9">
          <h2 className="text-2xl text-[var(--navy)]">
            Central Research Questions
          </h2>
          <ol className="mt-6 space-y-5">
            {questions.map((question, index) => (
              <li className="flex gap-4 leading-7" key={question}>
                <span className="pt-0.5 text-sm font-semibold text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 border-t border-[var(--line)] pt-9">
          <h2 className="text-2xl text-[var(--navy)]">
            Thematic Areas of Inquiry
          </h2>
          <div className="mt-6 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {themes.map((theme) => (
              <article className="bg-white/70 p-6 sm:p-7" key={theme.number}>
                <p className="text-sm font-semibold text-[var(--gold)]">
                  {theme.number}
                </p>
                <h3 className="mt-3 text-xl text-[var(--navy)]">
                  {theme.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 border-t border-[var(--line)] pt-9 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-[var(--navy)]">
              Policy and Development Relevance
            </h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              The research agenda has a strong policy orientation, seeking to
              inform public policy debates, institutional reform, and
              development planning through empirically grounded and
              context-sensitive insights.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[var(--navy)]">
              Future Directions
            </h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Areas of continuing interest include public sector performance
              measurement, human resource planning and productivity,
              environmental health and governance, and the relationship
              between population dynamics and economic development in
              sub-Saharan Africa.
            </p>
          </div>
        </section>

        <a
          className="mt-10 inline-flex font-semibold text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4"
          href={withBasePath("/publications.html")}
        >
          Explore publications
        </a>
      </section>
    </main>
  );
}
