import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class User extends createZodDto(UserSchema) {}
