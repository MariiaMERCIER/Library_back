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

import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  fullname: string;

  @Column()
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hashPassword(this.password, 10);
  }

  @Column('text')
  password: string;

  @ManyToMany(() => Author)
  @JoinTable()
  authors: Author[];
}
