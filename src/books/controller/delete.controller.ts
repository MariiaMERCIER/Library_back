import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { BooksService } from '../book.service';

@Controller('books')
export class DeleteBookController {
  constructor(private booksService: BooksService) {}

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
