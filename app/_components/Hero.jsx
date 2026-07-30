import { Button } from "../../components/ui/button";
import Social from "../../components/Social";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "../../lib/profile";

const snippetColors = {
  keyword: "text-primary",
  string: "text-emerald-600 dark:text-emerald-400",
  variable: "text-sky-600 dark:text-sky-400",
  plain: "text-muted-foreground",
};

export default function Hero() {
  return (
    <section id="about" className="section pb-6 pt-12 md:pb-10 md:pt-20">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up space-y-7">
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Hi, I am{" "}
              <span className="text-gradient">{profile.name}</span>
              <span className="text-primary">.</span>
            </h1>
            <p className="text-base font-medium text-foreground/90 md:text-lg">
              {profile.role} <span className="text-primary">@</span>{" "}
              {profile.company}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#projects" className="flex items-center gap-2">
                View my work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Social />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {profile.location}
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-xl font-bold md:text-2xl">{stat.value}</dt>
                <dd className="text-[0.7rem] leading-tight text-muted-foreground md:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Editor-style card: pure markup, no images to download. */}
        <div className="relative hidden lg:block">
          <div className="glow absolute -inset-10 -z-10" />
          <div className="surface animate-float overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 border-b bg-secondary/40 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <p className="ml-2 text-xs text-muted-foreground">developer.js</p>
            </div>
            <pre className="overflow-x-auto p-5 text-[0.8rem] leading-relaxed">
              <code>
                {profile.snippet.map((token, index) => (
                  <span key={index} className={snippetColors[token.type]}>
                    {token.text}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
