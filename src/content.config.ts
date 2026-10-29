import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project in src/content/projects/.
// The frontmatter fills the home page table and the project page title block;
// the markdown body becomes the project page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Position in the projects table (lowest first). Also sets the project number.
    order: z.number(),
    status: z.enum(['active', 'planned', 'shelved', 'done']),
    // Which table on the home page: hardware (default) or software and homelab.
    group: z.enum(['hardware', 'software']).default('hardware'),
    year: z.string(),
    // Optional longer date range for the project page, e.g. "Mar–Aug 2023".
    dates: z.string().optional(),
    // One or two sentences for the home page table.
    summary: z.string(),
    // Line under the title on the project page. Falls back to summary.
    lede: z.string().optional(),
    // true = build a project page from the markdown body.
    page: z.boolean().default(false),
    // Optional external link for projects without a page.
    href: z.string().url().optional(),
    // Cells in the project page title block, e.g. STATUS, BOARDS, SOURCE.
    meta: z
      .array(
        z.object({
          label: z.string(),
          lines: z.array(
            z.object({
              text: z.string(),
              href: z.string().optional(),
            }),
          ),
        }),
      )
      .default([]),
    updated: z.string().optional(),
  }),
});

export const collections = { projects };
