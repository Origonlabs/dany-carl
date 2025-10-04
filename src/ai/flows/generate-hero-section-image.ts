'use server';

/**
 * @fileOverview Generates a hero section image based on a text prompt.
 *
 * - generateHeroSectionImage - A function that handles the hero section image generation process.
 * - GenerateHeroSectionImageInput - The input type for the generateHeroSectionImage function.
 * - GenerateHeroSectionImageOutput - The return type for the generateHeroSectionImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroSectionImageInputSchema = z.object({
  prompt: z
    .string()
    .describe('The text prompt to generate the hero section image.'),
});
export type GenerateHeroSectionImageInput = z.infer<
  typeof GenerateHeroSectionImageInputSchema
>;

const GenerateHeroSectionImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated hero section image.'),
});
export type GenerateHeroSectionImageOutput = z.infer<
  typeof GenerateHeroSectionImageOutputSchema
>;

export async function generateHeroSectionImage(
  input: GenerateHeroSectionImageInput
): Promise<GenerateHeroSectionImageOutput> {
  return generateHeroSectionImageFlow(input);
}

const generateHeroSectionImagePrompt = ai.definePrompt({
  name: 'generateHeroSectionImagePrompt',
  input: {schema: GenerateHeroSectionImageInputSchema},
  output: {schema: GenerateHeroSectionImageOutputSchema},
  prompt: `Generate a hero section image based on the following prompt: {{{prompt}}}. The image should be in the style of Alan Walker, with a dystopian futuristic landscape, a central anonymous figure, and subtle technological elements.
`,
});

const generateHeroSectionImageFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionImageFlow',
    inputSchema: GenerateHeroSectionImageInputSchema,
    outputSchema: GenerateHeroSectionImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: input.prompt,
      model: 'googleai/imagen-4.0-fast-generate-001',
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageUrl: media.url};
  }
);
