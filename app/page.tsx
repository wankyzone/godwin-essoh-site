import { researchInterests } from "@/content/site";
import { siteOrigin, withBasePath } from "@/lib/site";

export const metadata = {
  alternates: siteOrigin
    ? { canonical: new URL(withBasePath("/"), siteOrigin) }
    : undefined,
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Academic profile
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.12] tracking-tight text-[var(--navy)] sm:text-6xl lg:text-7xl">
            Godwin Edet Essoh, Ph.D.
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">
            Senior Lecturer &amp; Academic Leader
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink)] sm:text-xl sm:leading-9">
            Governance. Public Policy. Institutional Development.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center rounded-sm bg-[var(--navy)] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#25445a]"
              href={withBasePath("/publications.html")}
            >
              Explore publications
            </a>
            <a
              className="inline-flex min-h-12 items-center rounded-sm border border-[var(--navy)] px-6 py-3 text-sm font-medium text-[var(--navy)] no-underline transition-colors hover:bg-white"
              href={withBasePath("/profile.html")}
            >
              Academic profile
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="focus-heading"
        className="border-y border-[var(--line)] bg-white/60"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Areas of work
            </p>
            <h2
              className="mt-3 text-3xl tracking-tight text-[var(--navy)] sm:text-4xl"
              id="focus-heading"
            >
              Academic focus
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Academic interests span public administration, employment
              relations, human resource management, and development studies,
              including questions of governance, institutional reform, workforce
              performance, and socio-economic development.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Research interests">
              {researchInterests.map((interest) => (
                <li
                  className="rounded-sm border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-sm text-[var(--navy)]"
                  key={interest}
                >
                  {interest}
                </li>
              ))}
            </ul>
            <a
              className="mt-7 inline-flex text-sm font-semibold text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
              href={withBasePath("/research.html")}
            >
              Read about research interests
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="leadership-heading"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Academic leadership
          </p>
          <h2
            className="mt-3 text-3xl tracking-tight text-[var(--navy)] sm:text-4xl"
            id="leadership-heading"
          >
            Teaching, research, and institutional service
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            Experience includes academic leadership, departmental service,
            teaching, and research. Further details are presented in the
            dedicated sections of this site.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <a
              className="text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
              href={withBasePath("/leadership.html")}
            >
              Leadership &amp; administration
            </a>
            <a
              className="text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
              href={withBasePath("/teaching.html")}
            >
              Teaching &amp; supervision
            </a>
            <a
              className="text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
              href={withBasePath("/contact.html")}
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
