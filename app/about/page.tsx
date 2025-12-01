import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building digital products that matter."
        subtitle="Built with intention, backed by data."
      />

      <section className="container space-y-10">
        <div className="grid gap-8 md:grid-cols-[2fr,1.3fr]">
          {/* Left column */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700">
            <p>
              Jaarky is a small, hands-on product and technology studio based in New Jersey, created to support founders, small teams, and small businesses who need a trusted partner to bring their ideas to life. After nearly 20 years working across software development, product management, and digital operations, I’ve seen how challenging it can be to find someone who can think strategically and execute technically. Jaarky was built to bridge that gap.
            </p>

            <p>
              I work closely with clients to understand their goals, customers, and constraints, then translate that into thoughtful digital experiences—whether it’s a new MVP, a website, a workflow, or an AI-powered feature. My approach is grounded in clarity, collaboration, and building only what truly matters. No inflated scopes. No vague buzzwords. No inflated scopes. No vague buzzwords. Just practical product thinking and reliable engineering.

            </p>

            <p>
              At its core, Jaarky is about helping people grow. Whether you’re launching your first idea, modernizing an outdated system, or looking for a product partner who understands both the creative and technical sides, I’m here to help you build something meaningful, sustainable, and built on a strong foundation.
            </p>
          </div>

          {/* Studio Snapshot Card */}
          <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-soft-lg space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jaarky-teal/80">
              Studio Snapshot
            </p>

            <dl className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <dt className="text-slate-500">Location</dt>
                <dd>New Jersey, USA (remote-friendly)</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-slate-500">Experience</dt>
                <dd>20 yrs in tech & product</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-slate-500">Expertise</dt>
                <dd>AI, Web, SaaS, Onboarding, Growth</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-slate-500">Engagements</dt>
                <dd>Fixed-scope & monthly retainers</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* How We Work */}
        <div className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-jaarky-ink mb-3">
            How we like to work
          </h2>

          <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold mb-1.5">Product-first</h3>
              <p>
                Every decision begins with user needs, business goals,
                and clear outcomes—not just features or technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1.5">Transparent & iterative</h3>
              <p>
                Clear scopes, regular check-ins, and frequent delivery
                so you always know where your project stands.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1.5">Technical depth</h3>
              <p>
                Comfortable with architecture, analytics, integrations,
                data flows, and AI—not just UI and aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}