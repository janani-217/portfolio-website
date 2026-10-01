import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-display text-2xl font-semibold text-ink">Education</h2>

      <div className="mt-8 flex gap-5 rounded-lg border border-line bg-surface p-6 md:max-w-xl">
        <GraduationCap className="mt-1 shrink-0 text-signal" size={24} />
        <div>
          <h3 className="font-display text-base font-semibold text-ink">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{education.institution}</p>
          <p className="mt-1 font-mono text-xs text-ink-faint">{education.years}</p>
          <p className="mt-3 text-sm text-ink-muted">{education.cgpa}</p>
          <p className="mt-1 text-sm text-ink-muted">{education.notes}</p>
        </div>
      </div>
    </section>
  );
}
