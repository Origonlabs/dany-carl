'use server';

/**
 * @fileOverview Generates album cover images based on a text prompt for the discography section.
 *
 * - generateAlbumCoverImages - A function that generates album cover images.
 * - GenerateAlbumCoverImagesInput - The input type for the generateAlbumCoverImages function.
 * - GenerateAlbumCoverImagesOutput - The return type for the generateAlbumCoverImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlbumCoverImagesInputSchema = z.object({
  prompt: z
    .string()
    .describe('A text prompt describing the desired album cover image.'),
});
export type GenerateAlbumCoverImagesInput = z.infer<
  typeof GenerateAlbumCoverImagesInputSchema
>;

const GenerateAlbumCoverImagesOutputSchema = z.object({
  albumCoverImageDataUri: z
    .string()
    .describe(
      'The generated album cover image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // prettier-ignore
    ),
});
export type GenerateAlbumCoverImagesOutput = z.infer<
  typeof GenerateAlbumCoverImagesOutputSchema
>;

export async function generateAlbumCoverImages(
  input: GenerateAlbumCoverImagesInput
): Promise<GenerateAlbumCoverImagesOutput> {
  return generateAlbumCoverImagesFlow(input);
}

const generateAlbumCoverImagesPrompt = ai.definePrompt({
  name: 'generateAlbumCoverImagesPrompt',
  input: {schema: GenerateAlbumCoverImagesInputSchema},
  output: {schema: GenerateAlbumCoverImagesOutputSchema},
  prompt: `Generate a square album cover image based on the following description: {{{prompt}}}. The image should follow the color palette of primarily dark grays and electric blue (#7DF9FF) for a futuristic and energetic feel, drawing from the specified inspiration of Alan Walker's visual style: dark, with geometric elements, cold light effects and a touch of mystery.  It may contain the logo of the artist or similar symbols. Return the image as a data URI.
`,
});

const generateAlbumCoverImagesFlow = ai.defineFlow(
  {
    name: 'generateAlbumCoverImagesFlow',
    inputSchema: GenerateAlbumCoverImagesInputSchema,
    outputSchema: GenerateAlbumCoverImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: input.prompt,
      model: 'googleai/imagen-4.0-fast-generate-001',
    });

    if (!media) {
      throw new Error('No image was generated.');
    }
    return {albumCoverImageDataUri: media.url};
  }
);
