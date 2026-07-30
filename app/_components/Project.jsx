import { Button } from "../../components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export default function Project({
  title,
  alt,
  image,
  description,
  url,
  repo,
  tags = [],
  cate,
  featured = false,
}) {
  return (
    <article
      className={cn(
        "group surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
        featured
          ? "grid w-full md:grid-cols-2"
          : "flex w-full max-w-sm flex-col"
      )}
    >
      <div className="relative overflow-hidden">
        <img
          className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={alt || title}
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        />
        {cate ? (
          <span className="absolute left-3 top-3 rounded-full border bg-background/80 px-2.5 py-0.5 text-[0.7rem] backdrop-blur-sm">
            {cate}
          </span>
        ) : null}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-4 p-5",
          featured && "justify-center md:p-7"
        )}
      >
        <div className="space-y-2">
          <h3
            className={cn(
              "font-semibold",
              featured ? "text-xl md:text-2xl" : "text-lg"
            )}
          >
            {title}
          </h3>
          {description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="chip bg-secondary/40">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Button asChild size="sm">
            <Link
              href={url || "/"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          {repo ? (
            <Button asChild size="sm" variant="outline">
              <Link
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" /> Code
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
