import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-soft px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-display text-sm font-medium text-ink">{profile.name}</p>
        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Mail size={17} />
          </a>
        </div>
        <p className="font-mono text-xs text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
