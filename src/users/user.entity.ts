import { Author } from 'src/authors/author.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Author)
  @JoinTable()
  authors: Author[];
}
