import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  avatar: z.string().optional(),
});

export const userContract = c.router({
  getUsers: {
    method: 'GET',
    path: '/api/users',
    responses: {
      200: z.array(UserSchema),
    },
    summary: 'Get all users',
    description: 'Get all users description',
  }
})