import { Entity, Column } from 'typeorm';

@Entity()
export class Book {
  @Column()
  name: string;

  @Column()
  type: string;
}
