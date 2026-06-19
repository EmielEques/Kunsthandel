# De Ruijter website

A maintenance-friendly Next.js website for kunsthandelderuijter.nl.

## Quick start

1. Upload this folder to GitHub.
2. Import the repository in Vercel.
3. Vercel will detect Next.js automatically.
4. After each change in GitHub, Vercel can redeploy the site.

## Easiest files to edit

- `content/site.ts` → chapter titles, object titles, stories, statuses, email address.
- `app/page.tsx` → homepage structure.
- `app/chapter-1/page.tsx` and `app/chapter-2/page.tsx` → chapter pages.
- `app/objects/object-01/page.tsx` and `app/objects/object-02/page.tsx` → object pages.
- `app/globals.css` → colors, typography, spacing, styling.

## Suggested workflow for feedback

- Edit text first in `content/site.ts`.
- Push changes to GitHub.
- Vercel publishes the update.
- Review live.

## Images

Replace placeholders later by adding real files to `public/images/` and then swapping the placeholder blocks in the page files.
