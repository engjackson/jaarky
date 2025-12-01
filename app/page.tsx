import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-60 pointer-events-none" />
        <div className="relative container flex flex-col lg:flex-row items-center gap-10 py-16 lg:py-24">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-jaarky-teal/90">
              Strategy · Product · Web · AI
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold text-jaarky-ink leading-tight">
              Build. Launch. Scale.
              <span className="block text-jaarky-teal mt-1">
                Your digital presence, elevated.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700">
              Jaarky is a modern product and technology studio specializing in
              web development, MVP builds, onboarding optimization, and
              AI-powered digital experiences. With nearly 20 years of experience
              in product, engineering, and strategy, we help you transform ideas
              into high-impact, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-jaarky-teal px-6 py-2.5 text-sm font-semibold text-white shadow-soft-lg hover:opacity-95 transition"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-jaarky-teal/60 hover:text-jaarky-teal transition"
              >
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-2">
              <span>Next.js · React · Tailwind</span>
              <span>Product Strategy & UX</span>
              <span>AI & Automation</span>
              <span>Analytics & Conversion</span>
            </div>
          </div>

          {/* Hero card */}
          <div className="w-full max-w-md lg:max-w-lg">
            <div className="rounded-2xl bg-white shadow-soft-lg border border-slate-100 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-jaarky-teal uppercase tracking-[0.15em]">
                    Studio Snapshot
                  </p>
                  <p className="text-sm text-slate-500">
                    Led by a senior product leader in NJ
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-jaarky-orange/10 px-3 py-1 text-xs font-semibold text-jaarky-orange">
                  Available for projects
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-slate-50 px-3 py-3">
                  <p className="text-sm font-semibold text-jaarky-ink">
                    20 yrs
                  </p>
                  <p className="text-slate-500">Tech & Product</p>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-3">
                  <p className="text-sm font-semibold text-jaarky-ink">
                    0 → 1
                  </p>
                  <p className="text-slate-500">MVP & Startups</p>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-3">
                  <p className="text-sm font-semibold text-jaarky-ink">
                    AI
                  </p>
                  <p className="text-slate-500">Automation</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
                  Focus Areas
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Web & software development</li>
                  <li>• Product strategy & onboarding</li>
                  <li>• AI-enabled workflows & experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Services */}
      <section className="container py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-jaarky-ink mb-2">
              What Jaarky can help you with
            </h2>

            <p className="text-sm text-slate-600 max-w-xl">
              Whether you're validating an idea, modernizing your online presence,
              or integrating AI into your workflows — we build with intention,
              clarity, and measurable impact.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-jaarky-teal hover:underline"
          >
            Explore all services →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Web & Software Development",
              desc: "High-performing sites and apps built with Next.js, React, and scalable backend infrastructure.",
            },
            {
              title: "Product Strategy & Growth",
              desc: "Discovery, roadmaps, analytics, onboarding optimization, and lifecycle improvements.",
            },
            {
              title: "AI & Automation",
              desc: "LLM-powered tools, chatbots, internal automation, and intelligent workflows.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-slate-100 p-5 shadow-sm hover:shadow-soft-lg transition-shadow"
            >
              <h3 className="text-base font-semibold text-jaarky-ink mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-slate-200 bg-white/80">
        <div className="container py-8 flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jaarky-teal/80">
              Ready when you are
            </p>
            <p className="text-base sm:text-lg text-jaarky-ink">
              Share your idea — we’ll help you shape it into a roadmap and working product.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-jaarky-orange px-5 py-2.5 text-sm font-semibold text-white shadow-soft-lg hover:opacity-95 transition"
          >
            Tell Us About Your Project
          </Link>
        </div>
      </section>
    </>
  );
}