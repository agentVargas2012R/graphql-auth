import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('student')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
