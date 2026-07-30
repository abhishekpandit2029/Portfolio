import { Rocket } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import { Button } from "../../components/ui/button";
import { profile } from "../../lib/profile";
import ProjectsSnip from "../_components/ProjectsSnip";

export const metadata = {
  title: "Projects",
  description:
    "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
};

export default function Page() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="Work"
        icon={Rocket}
        title="My Projects"
        subtitle="A collection of things I have built. For everything else, my GitHub is the best place to look."
      />

      <ProjectsSnip />

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild>
          <Link href={profile.socials.github} target="_blank" rel="noreferrer">
            View GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
