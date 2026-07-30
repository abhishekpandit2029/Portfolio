import { Button } from "../components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="shell grid min-h-[60vh] place-content-center py-20 text-center">
      <div className="space-y-5">
        <p className="text-7xl font-extrabold tracking-tight md:text-8xl">
          4<span className="text-gradient">0</span>4
        </p>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold md:text-3xl">
            Page not found<span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            The page you are looking for does not exist or has been moved
            <span className="text-primary">.</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Go home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">See projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
