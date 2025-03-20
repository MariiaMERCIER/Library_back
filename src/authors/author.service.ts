import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create.author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return await this.authorsRepository.find();
  }

  async findOne(id: string): Promise<Author | null> {
    return await this.authorsRepository.findOneBy({ id });
  }

  async create(author: CreateAuthorDto): Promise<Author> {
    return await this.authorsRepository.save(author);
  }

  async update(author: Author): Promise<UpdateResult> {
    return await this.authorsRepository.update(author.id, author);
  }

  async delete(id: string): Promise<void> {
    await this.authorsRepository.delete(id);
  }
}
