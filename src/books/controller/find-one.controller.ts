import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BooksService } from '../book.service';

@Controller('books')
export class FindOneBookController {
  constructor(private booksService: BooksService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }
}
