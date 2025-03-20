import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Book } from '../book.entity';
import { BooksService } from '../book.service';

@Controller('books')
export class FindAllBookController {
  constructor(private booksService: BooksService) {}

  @Get()
  async index(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
