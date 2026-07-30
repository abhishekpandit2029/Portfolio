import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { Button } from "../../components/ui/button";
import { profile } from "../../lib/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/abhishek2029",
    href: profile.socials.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "abhishekpandit2029",
    href: profile.socials.github,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          icon={Send}
          title="Let us work together"
          subtitle="Have a role, a product idea, or a problem worth solving? My inbox is always open."
        />

        <div className="surface relative overflow-hidden p-8 md:p-12">
          <div
            aria-hidden="true"
            className="glow absolute -right-20 -top-24 h-64 w-64"
          />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {profile.headline}
                <br />
                <span className="text-gradient">Let us build yours</span>
                <span className="text-primary">.</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am currently {profile.availability.toLowerCase()} and happy to
                talk about frontend engineering, headless commerce, or design
                systems.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> Send an email
                  </a>
                </Button>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {profile.location}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {channels.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="surface surface-hover flex items-center gap-4 p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border bg-secondary/40 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {value}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
