import Link from "next/link";
import { Rocket } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { Button } from "../../components/ui/button";
import { projects } from "../../lib/projects";
import Project from "./Project";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Work"
          icon={Rocket}
          title="Projects"
          subtitle="Things I have designed and built end to end, from user interfaces to full-stack features."
        />

        <div className="space-y-6">
          {featured.map((project) => (
            <Project key={project.title} {...project} />
          ))}

          {rest.length ? (
            <div className="flex flex-wrap items-stretch justify-center gap-6">
              {rest.map((project) => (
                <Project key={project.title} {...project} featured={false} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 grid place-content-center">
          <Button asChild variant="outline">
            <Link href="/projects">Browse all projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
