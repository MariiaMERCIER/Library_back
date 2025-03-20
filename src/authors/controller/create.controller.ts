import { Controller, Post, Body } from '@nestjs/common';
import { AuthorsService } from '../author.service';

import { CreateAuthorDto } from '../dto/create.author.dto';

@Controller('authors')
export class CreateAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Post('create')
  async create(@Body() author: CreateAuthorDto) {
    try {
      await this.authorsService.create(author);

      return {
        success: true,
        message: 'User Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
