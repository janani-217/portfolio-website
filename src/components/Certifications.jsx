import { certifications } from "../data/portfolioData";

const statusStyle = {
  Completed: "text-signal border-signal-dim",
  "In progress": "text-amber border-amber",
  Planned: "text-ink-faint border-line-soft",
};

export default function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Certifications &amp; Training
      </h2>

      <ul className="mt-8 divide-y divide-line-soft rounded-lg border border-line bg-surface md:max-w-2xl">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-medium text-ink">{cert.name}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{cert.issuer}</p>
            </div>
            <span
              className={`w-max rounded-full border px-2.5 py-1 font-mono text-[11px] ${
                statusStyle[cert.status] ?? statusStyle.Planned
              }`}
            >
              {cert.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
