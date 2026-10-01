import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./icons";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-display text-2xl font-semibold text-ink">Projects</h2>
      <p className="mt-2 max-w-lg text-sm text-ink-muted">
        Lab work and builds — mostly network topologies I've configured and
        broken on purpose to learn how they fail.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <article
            key={proj.title}
            className="flex flex-col rounded-lg border border-line bg-surface p-6"
          >
            <h3 className="font-display text-base font-semibold text-ink">
              {proj.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
              {proj.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-ink-faint">
              {proj.tech.map((t) => (
                <li key={t} className="rounded border border-line-soft px-1.5 py-0.5">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4 border-t border-line-soft pt-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <Github size={15} />
                  Code
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-signal transition-colors hover:text-ink"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
