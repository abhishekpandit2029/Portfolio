"use client";

import { useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import Project from "./Project";
import { projects } from "../../lib/projects";

export default function ProjectsSnip() {
  const [cate, setCate] = useState("all");

  // Filters are derived from the data so a category never renders an empty list.
  const categories = useMemo(
    () => ["all", ...new Set(projects.map((project) => project.cate))],
    []
  );

  const visible = useMemo(
    () =>
      cate === "all"
        ? projects
        : projects.filter((project) => project.cate === cate),
    [cate]
  );

  return (
    <div className="shell">
      {categories.length > 2 ? (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setCate(category)}
              variant={cate === category ? "default" : "secondary"}
              size="sm"
              className="rounded-full text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {visible.map((project) => (
          <Project key={project.title} {...project} featured={false} />
        ))}
      </div>
    </div>
  );
}
