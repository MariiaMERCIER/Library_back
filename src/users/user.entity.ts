import { Author } from 'src/authors/author.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('text')
  token: string;

  // @ManyToMany(() => Author)
  // @JoinTable()
  // authors: Author[];
}
