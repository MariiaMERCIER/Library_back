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
export class FindAllAuthorController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  async index(): Promise<Author[]> {
    return this.authorsService.findAll();
  }
}
