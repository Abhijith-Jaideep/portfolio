# Abhijith Jaideep, Portfolio

Personal portfolio site positioning for full-time Software Engineer roles in
Melbourne, with a primary focus on mobile development and a secondary focus on
full-stack. Built to convert a recruiter or hiring manager into an interview
within a two-minute skim.

Live: **https://abhijith-jaideep.vercel.app**

## Stack

- Next.js 16 (App Router, Turbopack) with TypeScript
- Tailwind CSS v4, themed through CSS custom properties in `globals.css`
- No animation library. Scroll reveals use IntersectionObserver directly and
  the case study accordion is a CSS `grid-template-rows` transition, so runtime
  dependencies are just `next`, `react`, and `clsx`.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
```

## Layout

| Path | Purpose |
| --- | --- |
| `src/data/content.ts` | All site copy, projects, skills, and experience. Edit here first. |
| `src/components/` | Section components (Hero, CaseStudies, Skills, About, Contact) |
| `src/app/icon.svg` | AJ monogram, auto-wired as favicon by Next.js |
| `public/video/` | Compressed app demo clips |
| `public/resume/` | Downloadable resume, PDF and DOCX |

## Editing content

Nearly all copy lives in `src/data/content.ts`. The components read from it, so
adding a project or reordering skills does not require touching JSX.

### Adding a demo video

Case studies render a phone frame that shows a real clip when `media.src` is
set, and a "coming soon" placeholder when it is not. To add one, compress a
screen recording and point at it:

```ts
media: {
  kind: "phone",
  src: "/video/your-clip.mp4",
  poster: "/video/your-poster.jpg",
  caption: "What the clip shows",
}
```

Keep clips short and small. The SustainaPet clip is an 18 second muted loop at
540x1200 and 488KB, cut down from a 10 minute source. `ffmpeg` is not a project
dependency; install it only when you need to cut a new clip:

```bash
npm install --no-save ffmpeg-static
```

## Deployment

Deployed on Vercel from the `main` branch. Pushing to `main` triggers a new
production deploy. No environment variables or build configuration are needed,
since every route is statically prerendered.
