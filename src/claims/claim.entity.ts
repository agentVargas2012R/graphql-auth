import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('claim')
export class Claim {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  studentId: string;
}
