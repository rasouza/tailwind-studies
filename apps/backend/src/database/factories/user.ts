import { User } from '../generated/client';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import prisma from '../client';

export const userFactory = Factory.define<User>(({ sequence, onCreate }) => {
  onCreate(async (user) => {
    return await prisma.user.create({
      data: {
        // ID is auto-generated
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  });
  return {
    id: sequence,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});
