import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What Jaarky can help you build."
        subtitle="From strategy and design to engineering and AI automation, we help businesses and teams move faster with clarity, structure, and modern technology."
      />

      <section className="container space-y-10">
        {/* Two-column layout */}
        <div className="grid gap-8 md:grid-cols-[2fr,1.3fr]">
          {/* Service descriptions */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700">

            <div>
              <h3 className="font-semibold text-jaarky-ink mb-1.5">
                Product Strategy & Growth
              </h3>
              <p>
                Discovery, roadmaps, user journeys, onboarding optimization,
                and growth planning designed to align product vision with
                business impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-jaarky-ink mb-1.5">
                Web & Software Development
              </h3>
              <p>
                High-performance websites, SaaS platforms, and custom software
                built with Next.js, React, and scalable modern infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-jaarky-ink mb-1.5">
                MVPs & Startup Builds
              </h3>
              <p>
                Lean prototypes, fast iterations, and go-to-market support to
                help founders validate ideas and launch with confidence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-jaarky-ink mb-1.5">
                AI & Automation
              </h3>
              <p>
                Custom AI chatbots, LLM-powered workflows, internal automation,
                and intelligent onboarding experiences to enhance engagement
                and scalability.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-jaarky-ink mb-1.5">
                Marketing & Analytics
              </h3>
              <p>
                Analytics setup, dashboards, SEO, conversion optimization,
                and insights to help you understand users and grow effectively.
              </p>
            </div>
          </div>

          {/* Snapshot card */}
          <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-soft-lg space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jaarky-teal/80">
              Capabilities
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Next.js, React, Tailwind</li>
              <li>• API & Supabase integrations</li>
              <li>• Product analytics & dashboards</li>
              <li>• AI chatbots & automation workflows</li>
              <li>• WordPress site builds</li>
              <li>• UX/UI & conversion design</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}