# Personal Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS —
for a networking/cloud-focused fresher CSE graduate to show to recruiters.

## Tech stack

- React 19
- Vite
- Tailwind CSS v4
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to personalize

Almost everything on the site is driven from one file:

**`src/data/portfolioData.js`**

Open it and replace every `TODO` comment:

- `profile.name` — your name (also used in the navbar, hero, and footer)
- `profile.email` — your email
- `profile.resumeUrl` — path to your resume PDF (drop the PDF into `public/`,
  e.g. `public/resume.pdf`, and set this to `/resume.pdf`)
- `profile.socials.github` / `profile.socials.linkedin` — your profile links
- `about.paragraphs` — your own intro, in your own words
- `projects` — replace the three placeholder projects with your real ones
  (or add more). Set `demo: null` on any project with no live link — the
  "Live Demo" button hides automatically.
- `education` — your college name and CGPA
- `certifications` — your real certifications/training, with an honest
  `status` of `"Completed"`, `"In progress"`, or `"Planned"`

You generally won't need to touch the component files (`src/components/`)
just to update content — they all read from this one data file.

## Project structure

```
src/
  main.jsx              entry point
  App.jsx                assembles all sections
  index.css              Tailwind import + design tokens (colors, fonts)
  data/
    portfolioData.js     ← all editable content lives here
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    SignalDivider.jsx     small section divider
    icons.jsx             GitHub/LinkedIn icons (lucide-react no longer
                           ships trademarked brand icons, so these two are
                           drawn by hand in the same style)
```

## Notes

- The contact form has no backend. Submitting it opens the visitor's email
  client with the message pre-filled (via a `mailto:` link) — it does not
  silently "send" anything. To make it submit directly, wire it up to a
  service like Formspree or EmailJS, or your own API, inside
  `src/components/Contact.jsx`.
- Colors, fonts, and spacing tokens are defined in `src/index.css` under the
  `@theme` block if you want to adjust the palette.

## Testing checklist before sending this to recruiters

- [ ] Replace every `TODO` in `src/data/portfolioData.js`
- [ ] Add your real resume PDF to `public/` and confirm the Download Resume
      button opens it
- [ ] Confirm GitHub, LinkedIn, and email links all go to the right place
- [ ] Replace the three placeholder projects with real ones (or keep the
      lab projects if accurate, but double-check the GitHub links)
- [ ] Re-read the About section — make sure nothing overstates your
      experience
- [ ] Test the mobile menu (resize the browser or use dev tools' device view)
- [ ] Test on an actual phone if possible
- [ ] Click every nav link and confirm smooth scroll lands on the right
      section
- [ ] Submit the contact form and confirm it opens your email client
      correctly
- [ ] Run `npm run build` and fix any errors before deploying
- [ ] Check color contrast / readability in normal daylight, not just your
      editor's dark theme
- [ ] Deploy (Vercel, Netlify, or GitHub Pages are all free and simple for
      a Vite app) and test the live link on both desktop and mobile
