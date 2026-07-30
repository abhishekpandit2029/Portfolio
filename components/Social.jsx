import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "../lib/profile";

const links = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Social() {
  return (
    <div className="flex w-fit items-center gap-1">
      {links.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
