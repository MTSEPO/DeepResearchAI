import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

const apiKey = process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  console.warn('Warning: GOOGLE_GENAI_API_KEY is not set. AI features will fail until this environment variable is provided in your deployment settings.');
}

export const ai = genkit({
  plugins: [googleAI({ apiKey: apiKey || 'PROVIDE_API_KEY' })],
  model: 'googleai/gemini-2.5-flash',
});