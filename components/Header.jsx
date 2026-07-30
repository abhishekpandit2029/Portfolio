"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { navigation } from "../lib/profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section is crossing the viewport middle.
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors hover:text-primary",
                    isHome && active === item.id
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="hidden sm:flex">
            <Link href="/#contact">Contact Me</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex lg:hidden" asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {navigation.map((item) => (
                <DropdownMenuItem key={item.id} asChild>
                  <Link href={`/#${item.id}`}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/projects">All Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
