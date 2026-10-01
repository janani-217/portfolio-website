import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-display text-2xl font-semibold text-ink">Skills</h2>
      <p className="mt-2 max-w-lg text-sm text-ink-muted">
        Grouped by area — networking is where most of my hands-on time has gone.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-soft"
            style={{ borderLeftColor: cat.accent, borderLeftWidth: "3px" }}
          >
            <h3 className="font-display text-base font-semibold text-ink">
              {cat.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line-soft bg-surface-raised px-2.5 py-1 text-xs text-ink-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
