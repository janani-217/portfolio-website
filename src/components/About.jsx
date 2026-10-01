import { about, profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">About</h2>
          <p className="mt-2 font-mono text-sm text-ink-faint">{profile.location}</p>
        </div>
        <div className="max-w-2xl space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
