import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
      <div className="flex justify-between">
        <div>
          <Logo />
          <p className="text-sm">
            Built by me, avilable on{" "}
            <a
              href="https://github.com/r2hu1"
              className="hover:underline hover:text-primary"
            >
              GitHub
            </a>
            <span className="text-primary">.</span>
          </p>
        </div>
        <ModeToggle />
      </div>
      <Social />
      <p className="text-xs">
        {" "}
        ©{new Date().getFullYear()}{" "}
        <a
          href="https://github.com/r2hu1"
          className="hover:underline hover:text-primary"
        >
          Abhishek Pandit
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
