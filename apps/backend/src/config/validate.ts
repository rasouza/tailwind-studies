import { z } from 'zod';

export function validate(config: Record<string, unknown>) {
  const schema = z.object({
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().optional(), // TODO: make it required when authentication is implemented
  });

  schema.parse(config);

  return config;
}
