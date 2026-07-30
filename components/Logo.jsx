import Link from "next/link";
import { profile } from "../lib/profile";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 select-none"
      aria-label={`${profile.name} home`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-lg font-bold text-primary-foreground transition-transform group-hover:scale-95">
        A
      </span>
      <span className="hidden text-base font-semibold sm:block">
        {profile.firstName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}
