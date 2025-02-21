import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AuthorsService } from '../author.service';
import { Author } from '../author.entity';

@Controller('authors')
export class FindOneAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.authorsService.findOne(id);
  }
}
