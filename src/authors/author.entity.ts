import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
