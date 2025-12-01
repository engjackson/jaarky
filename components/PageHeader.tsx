type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="container mb-10 mt-4">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jaarky-teal/80 mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-semibold text-jaarky-ink mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}