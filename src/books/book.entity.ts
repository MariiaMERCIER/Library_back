import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  name: string;
}
