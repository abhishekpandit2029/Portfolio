/**
 * Shared section header so every section on the page uses the same
 * eyebrow / title / subtitle rhythm.
 */
export default function SectionHeading({ eyebrow, title, subtitle, icon: Icon }) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
      {eyebrow ? (
        <span className="eyebrow">
          {Icon ? <Icon className="h-3.5 w-3.5 text-primary" /> : null}
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle ? (
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
