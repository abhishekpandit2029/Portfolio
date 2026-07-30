import { Sparkles } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { skillGroups } from "../../lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Toolkit"
          icon={Sparkles}
          title="Skills"
          subtitle="The languages, frameworks, and platforms I reach for when building and shipping products."
        />

        <div className="space-y-10">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border bg-secondary/40 text-primary">
                    <GroupIcon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                  <span className="text-xs text-muted-foreground">
                    {group.items.length}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>

                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.name}
                        title={item.name}
                        className="group surface surface-hover flex aspect-square flex-col items-center justify-center gap-2 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                      >
                        {Icon ? (
                          <Icon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary" />
                        ) : (
                          <span className="grid h-7 w-7 place-items-center text-lg font-bold text-muted-foreground transition-colors group-hover:text-primary">
                            {item.label}
                          </span>
                        )}
                        <p className="px-1 text-center text-[0.65rem] leading-tight text-muted-foreground">
                          {item.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
