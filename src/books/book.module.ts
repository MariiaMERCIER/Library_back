import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from './book.entity';
import { BooksService } from './book.service';

import { FindOneBookController } from './controller/find-one.controller';
import { FindAllBookController } from './controller/find-all.controller';
import { DeleteBookController } from './controller/delete.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [
    DeleteBookController,
    FindOneBookController,
    FindAllBookController,
  ],
})
export class BooksModule {}
