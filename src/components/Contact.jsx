import { useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend is wired up here, so this opens the visitor's own mail
  // client with the message pre-filled instead of pretending to send it.
  // Swap this for a real request once you connect a form service
  // (e.g. Formspree, EmailJS, or your own API).
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
      <p className="mt-2 max-w-lg text-sm text-ink-muted">
        Open to fresher roles in networking, cloud, and IT infrastructure.
        Reach out directly, or use the form below.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-xs text-ink-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-signal-dim"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-ink-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-signal-dim"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-ink-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1.5 w-full resize-none rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-signal-dim"
              placeholder="Say hello"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
          <p className="text-xs text-ink-faint">
            Opens your email client with this message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}
