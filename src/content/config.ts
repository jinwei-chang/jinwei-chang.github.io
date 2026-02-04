import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const resumeCollection = defineCollection({
    loader: glob({base: './src/content/resume/', pattern: '**/*.yaml'}),
    schema: z.object({
        name: z.string(),
        email: z.string().email(),
        education: z.array(z.object({
            degree: z.string(),
            institution: z.string(),
            department: z.string(),
            from: z.number(),
            end: z.number().optional(),
        })).optional(),
        publications: z.object({
            master_thesis: z.object({
                title: z.string(),
                link: z.string().url().optional(),
            }).optional(),
            journals: z.array(z.object({
                authors: z.string(),
                title: z.string(),
                publication: z.string(),
                doi: z.string().optional(),
                note: z.string().optional(),
                year: z.number().optional(),
                link: z.string().url().optional(),
            })).optional(),
            conferences: z.array(z.object({
                authors: z.string(),
                title: z.string(),
                publication: z.string(),
                doi: z.string().optional(),
                note: z.string().optional(),
                year: z.number().optional(),
                link: z.string().url().optional(),
            })).optional(),
        }).optional(),
        awards: z.array(z.object({
            title: z.string(),
            year: z.number(),
            work: z.string().optional(),
            award: z.string().optional(),
            rank: z.string().optional(),
            certificate: z.string().url().optional(),
            link: z.string().url().optional(),
        })).optional(),
        programming: z.array(z.object({
            title: z.string(),
            main_program_lang: z.array(z.string()),
            description: z.string(),
            link: z.string().url().optional(),
        })).optional(),
    }),
});

export const collections = {
    resume: resumeCollection,
};