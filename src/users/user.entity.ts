import { Author } from 'src/authors/author.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('text')
  salt: string;

  @Column('text')
  token: string;

  @Column('json', { nullable: true })
  authors: Author[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
