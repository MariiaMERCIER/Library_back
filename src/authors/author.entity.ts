import { Entity, Column } from 'typeorm';

@Entity()
export class Author {
  @Column()
  name: string;

  @Column()
  books: string[];
}
