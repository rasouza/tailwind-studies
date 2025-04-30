import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { userContract } from '@repo/api-contracts';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @TsRestHandler(userContract.getUsers)
  findAll() {
    return tsRestHandler(userContract.getUsers, async () => {
      const users = await this.usersService.findAll();
      const transformedUsers = users.map((user) => ({
        ...user,
        avatar: user.avatar ?? undefined,
      }));
      return {
        status: 200,
        body: transformedUsers,
      };
    });
  }
}
