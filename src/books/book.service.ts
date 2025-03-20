import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOne(id: string): Promise<Book | null> {
    return await this.booksRepository.findOneBy({ id });
  }

  async create(book: Book): Promise<Book> {
    return await this.booksRepository.save(book);
  }

  async delete(id: string): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
