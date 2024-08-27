import { projects } from "../lib/projects";
import Hero from "./_components/Hero";
import Project from "./_components/Project";
import ProjectsSnip from "./_components/ProjectsSnip";
import Skills from "./_components/Skills";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Experience from "./_components/Experience";
import Certificate from "./_components/Certificate";

export default function Home() {
  return (
    <main className="mb-20">
      <Hero />
      <Experience />
      <Skills />

      <div id="projects">
        <div className="text-center mb-8 flex flex-col space-y-2">
          <h1 className="text-4xl font-bold">
            Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-basic">
            Some of my projects i built, click view all <br /> for all projects
            <span className="text-primary">.</span>
          </p>
        </div>

        <div className="flex gap-2 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5">
          <Project {...projects[0]} />
          <Project {...projects[1]} />
          <Project {...projects[2]} />
        </div>

        <div className="grid place-content-center mt-10">
          <Button asChild variant="secondary">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
      <Certificate />
    </main>
  );
}
