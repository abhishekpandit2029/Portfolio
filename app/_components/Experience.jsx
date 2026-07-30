import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { education, experience } from "../../lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Career"
          icon={Briefcase}
          title="Experience"
          subtitle="The roles I have taken on, the products I helped ship, and the impact I made along the way."
        />

        {/* Timeline: a single rail on the left with a marker per role. */}
        <ol className="relative space-y-6 border-l pl-6 md:pl-10">
          {experience.map((item) => (
            <li key={`${item.company}-${item.duration}`} className="relative">
              <span
                aria-hidden="true"
                className={
                  item.current
                    ? "absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:-left-[2.85rem]"
                    : "absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border-2 border-muted-foreground/40 bg-background md:-left-[2.85rem]"
                }
              />

              <article className="surface surface-hover p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold md:text-xl">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/90">
                        {item.company}
                      </span>{" "}
                      &middot; {item.location}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <span className="chip">{item.duration}</span>
                    <span className="chip">{item.mode}</span>
                    {item.current ? (
                      <span className="chip border-primary/40 text-primary">
                        Current
                      </span>
                    ) : null}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 border-t pt-4">
                  {item.stack.map((tech) => (
                    <span key={tech} className="chip bg-secondary/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}

          <li className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border-2 border-muted-foreground/40 bg-background md:-left-[2.85rem]"
            />
            <article className="surface surface-hover p-5 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold md:text-xl">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {education.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/90">
                      {education.school}
                    </span>{" "}
                    &middot; {education.location}
                  </p>
                </div>
                <span className="chip shrink-0">{education.duration}</span>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </section>
  );
}
