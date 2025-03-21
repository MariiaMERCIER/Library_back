import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Author } from './author.entity';
import { AuthorsService } from './author.service';
import { UpdateAuthorController } from './controller/update.controller';
import { FindOneAuthorController } from './controller/find-one.controller';
import { CreateAuthorController } from './controller/create.controller';
import { DeleteAuthorController } from './controller/delete.controller';
import { FindAllAuthorController } from './controller/find-all.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsService],
  controllers: [
    CreateAuthorController,
    UpdateAuthorController,
    DeleteAuthorController,
    FindAllAuthorController,
    FindOneAuthorController,
  ],
})
export class AuthorsModule {}
