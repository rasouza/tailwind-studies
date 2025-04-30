import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}
  async findAll() {
    return await this.db.user.findMany();
  }
}
