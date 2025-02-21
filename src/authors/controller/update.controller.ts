import { Controller, Put, Body, Param } from '@nestjs/common';
import { AuthorsService } from '../author.service';
import { Author } from '../author.entity';

@Controller('authors')
export class UpdateAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Put(':id/update')
  async update(@Param('id') id, @Body() author: Author) {
    author.id = id;
    this.authorsService.update(author);
  }
}
