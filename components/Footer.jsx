import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { navigation, profile } from "../lib/profile";

export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {profile.role} building fast, scalable web products with Next.js and
            TypeScript<span className="text-primary">.</span>
          </p>
          <Social />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Get in touch</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
            <li>
              <Link
                href="/projects"
                className="transition-colors hover:text-primary"
              >
                All Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col items-center justify-between gap-2 border-t py-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with Next.js and Tailwind CSS
          <span className="text-primary">.</span>
        </p>
      </div>
    </footer>
  );
}
