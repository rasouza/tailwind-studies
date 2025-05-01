import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersContract } from '@repo/api-contracts/users';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
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
