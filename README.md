# joel0328.github.io

Personal site and project log for Joel Anthony, built with [Astro](https://astro.build) and
published to GitHub Pages at https://joel0328.github.io.

## Updating the site

Every push to `main` rebuilds and publishes the site (see `.github/workflows/deploy.yml`). It's
live a minute or two later.

### Add or change a project

Each project is one markdown file in `src/content/projects/`.

```markdown
---
title: My new project
order: 2            # position in the projects table, lowest first
status: active      # active | planned | shelved | done
year: '2026'
summary: One or two sentences for the home page table.
page: true          # true = give it its own detail page from the text below
lede: Optional line under the title on the detail page.
meta:               # cells in the detail page title block
  - label: SOURCE
    lines:
      - text: repo-name
        href: https://github.com/joel0328/repo-name
updated: October 2026
---

## General notes

1. Write the page in normal markdown. `##` headings become the blue section labels,
   and markdown tables get the drawing-sheet table style.
```

- Projects with `page: false` (the default) only appear in the table. Give them `href:` to link
  somewhere else instead.
- The project number on each detail page comes from its position in the table, so reordering
  renumbers them automatically.
- Images go in `public/images/` and are referenced as `/images/name.jpg`.

### Everything else on the home page

Name, title block, contact links, general notes and experience are in `src/data/profile.ts`.

The resume is `public/resume.pdf`; replace that file to update it. The link is in
`src/data/profile.ts`.

## Working on it locally (optional)

Needs Node 20 or newer.

```sh
npm install
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # what CI runs; output goes to dist/
```

## One-time GitHub setup

Settings → Pages → Build and deployment → Source: **GitHub Actions**.
