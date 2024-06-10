import { z } from "zod";

const envSchema = z.object({
  ACCESS_TOKEN_AUTH: z.string(),
  API_KEY_AUTH: z.string(),
});

export const env = envSchema.parse(process.env);
