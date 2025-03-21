import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { UsersService } from './user.service';
import { CreateUserController } from './controller/create.controller';
import { UpdateUserController } from './controller/update.controller';
import { DeleteUserController } from './controller/delete.controller';
import { FindAllUserController } from './controller/find-all.controller';
import { FindOneUserController } from './controller/find-one.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
    FindAllUserController,
    FindOneUserController,
  ],
})
export class UsersModule {}
