import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.user.dto';
import { Author } from 'src/authors/author.entity';
import { IsArray } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsArray()
  authors: Author[];
}
