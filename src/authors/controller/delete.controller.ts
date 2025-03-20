import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AuthorsService } from '../author.service';

@Controller('authors')
export class DeleteAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    const existingAuthor = await this.authorsService.findOne(id);
    return this.authorsService.delete(id);
  }
}
