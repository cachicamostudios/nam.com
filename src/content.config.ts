import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		galeria: z.string().optional(),
	}),
});

const recetas = defineCollection({
	loader: glob({ base: './src/content/recetas', pattern: '*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		porciones: z.string().optional(),   // ej: "4 personas"
		tiempo: z.string().optional(),      // ej: "45 min"
		dificultad: z.string().optional(),  // ej: "Fácil"
	}),
});

export const collections = { blog, recetas };
