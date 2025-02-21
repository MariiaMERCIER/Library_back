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
export class CreateAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Post('create')
  async create(@Body() author: Author) {
    return this.authorsService.create(author);
  }
}
