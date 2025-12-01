import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something together."
        subtitle="Looking to start a project, improve your product experience, or add AI to your workflow? Reach out and we’ll discuss next steps."
      />

      <section className="container space-y-10 max-w-2xl">
        <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-soft-lg space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jaarky-teal/80">
            Email
          </p>
          <a
            href="mailto:jaarky.eng@gmail.com"
            className="text-sm font-semibold text-jaarky-teal underline"
          >
            jaarky.eng@gmail.com
          </a>
        </div>

        {/* Form */}
        <form className="space-y-6 text-sm sm:text-base">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Name</label>
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
              type="text"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Email</label>
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
              type="email"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Message</label>
            <textarea
              rows={6}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-full bg-jaarky-teal text-white px-6 py-2.5 font-semibold shadow-soft-lg hover:opacity-95 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}