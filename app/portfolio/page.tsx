import PageHeader from "@/components/PageHeader";

const projects = [
  {
    name: "Acquired Taste — Food Journey App",
    type: "Founder · Product · Development",
    summary:
      "A gamified food discovery and journaling app that helps people explore global cultures through what they eat.",
    details: [
      "Developed the full business plan, user journeys, and initial product strategy.",
      "Created wireframes, user flows, and early UX prototypes.",
      "Developed a system architecture designed to drive engagement, learning, and repeat usage.",
    ],
    tag: "In active development",
    url: "https://acquiredtaste.app",
  },
  {
    name: "Ping’s NYC — Restaurant Website",
    type: "Web Development · UX/UI",
    summary:
      "A modern, mobile-first restaurant site with menu, photos, and clear calls-to-action for reservations and online ordering.",
    details: [
      "Implemented a fast, responsive site optimized for local SEO.",
      "Integrated workflow that increased online reservations by 200%.",
      "Added analytics to understand visits, clicks, and conversions.",
    ],
    tag: "Launched for a NYC restaurant",
    url: "https://pingsnewyork.com",
  },
  {
    name: "Real Estate Agent Websites",
    type: "Web Development · Branding",
    summary:
      "Templated but customized sites for real estate agents, highlighting listings, testimonials, and lead capture.",
    details: [
      "Crafted layouts optimized for mobile viewing and lead capture.",
      "Implemented CMS-driven sections and easy content updates.",
      "Connected forms to email, CRM, and analytics.",
    ],
    tag: "Multiple independent agents",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A look at what we’ve built."
        subtitle="Web, mobile, and AI-powered work designed to help businesses grow."
      />

      <section className="container space-y-8 pb-4">
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-soft-lg transition-shadow"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-jaarky-ink">
                    {project.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.16em]">
                    {project.type}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-jaarky-teal/10 px-3 py-1 text-xs font-semibold text-jaarky-teal mt-1 sm:mt-0">
                  {project.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{project.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {project.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              {project.url && (
                <div className="mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-jaarky-teal font-semibold"
                  >
                    Visit site
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 text-sm text-slate-700 shadow-sm">
          <h3 className="text-base font-semibold text-jaarky-ink mb-2">
            Enterprise & product leadership background
          </h3>
          <p className="mb-2">
            With experience leading product and technology across wellness, real estate, and fintech, I’ve helped companies scale, improve retention, and ship new product lines.
That leadership background guides Jaarky’s approach, grounded in strategy, informed by data, and focused on delivering outcomes that matter.
          </p>
        </div>
      </section>
    </>
  );
}