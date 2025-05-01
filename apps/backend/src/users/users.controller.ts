import { Controller, Get } from '@nestjs/common';
import { usersContract } from '@repo/api-contracts/users';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @TsRestHandler(usersContract.getUsers)
  findAll() {
    return tsRestHandler(usersContract.getUsers, async () => {
      const users = await this.usersService.findAll();

      return {
        status: 200,
        body: users,
      };
    });
  }
}
