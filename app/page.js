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
    <main className="mx-4">
      <Hero />
      <Experience />
      <Skills />

      <div id="projects">
        <div className="text-center flex flex-col space-y-2 justify-center items-center mb-10">
          <h1 className="text-4xl font-bold">
            Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-basic text-center w-[80%]">
            Here, you will find examples of the projects I have worked on. Each project demonstrates my expertise in different areas of development, from designing user interfaces to building full-stack applications. The projects vary in complexity and scope, reflecting my ability to adapt and learn new technologies to meet project goals.
            <span className="text-primary">.</span>
          </p>
        </div>

        <div className="flex gap-4 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5">
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
