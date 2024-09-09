import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-7 md:px-20 lg:px-32">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <ul className="md:flex gap-4 text-sm mr-5 hidden">
          <li className="hover:underline underline-offset-4 hover:text-primary text-base">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary text-base">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary text-base">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary text-base">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary text-base">
            <Link href="#certificate">Certification</Link>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden flex" asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 flex flex-col space-y-3">
            <Link href="#about">
              About
            </Link>
            <Link href="#experience">
              Experience
            </Link>
            <Link href="#skills">
              Skills
            </Link>
            <Link href="#projects">
              Projects
            </Link>
            <Link href="#certificate">
              Certification
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </header>
  );
}
