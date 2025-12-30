import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects/content" })
});

export const collections = { projects };