import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  fullname: string;

  @Column()
  email: string;
}
