import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import { profile } from "../data/portfolioData";

// A small topology diagram: a few nodes, connected paths, and a single
// pulse of light that travels the network once on load. This is the one
// deliberate animated moment on the page — everything else stays still.
function TopologyGraphic() {
  const nodes = [
    { id: "a", x: 40, y: 60 },
    { id: "b", x: 180, y: 30 },
    { id: "c", x: 180, y: 110 },
    { id: "d", x: 310, y: 60 },
    { id: "e", x: 310, y: 150 },
  ];
  const links = [
    ["a", "b"],
    ["a", "c"],
    ["b", "d"],
    ["c", "d"],
    ["c", "e"],
  ];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 360 190"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Diagram of a small network topology with a signal pulse traveling between nodes"
    >
      {links.map(([from, to], i) => {
        const a = byId[from];
        const b = byId[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-line)"
            strokeWidth="1.5"
          />
        );
      })}

      {/* traveling pulse along a -> c -> e */}
      <circle r="4" fill="var(--color-signal)">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M 40 60 L 180 110 L 310 150"
        />
      </circle>
      <circle r="4" fill="var(--color-signal)" opacity="0.5">
        <animateMotion
          dur="4s"
          begin="2s"
          repeatCount="indefinite"
          path="M 40 60 L 180 30 L 310 60"
        />
      </circle>

      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="7" fill="var(--color-surface-raised)" stroke="var(--color-line)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="2.5" fill="var(--color-ink-faint)" />
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-14 md:flex-row md:gap-16 md:px-16 md:pb-32 md:pt-20"
    >
      <div className="w-full md:w-3/5">
        <p className="font-mono text-sm text-signal">{profile.title}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal-dim hover:text-signal"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {profile.email}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center md:w-2/5">
        <TopologyGraphic />
      </div>
    </section>
  );
}
