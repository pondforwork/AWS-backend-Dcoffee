import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Summarysalary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  workhour: number;

  @Column({ type: 'float' })
  salary: number;

  @Column({ nullable: true })
  Date: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => Checkinout, (checkinout) => checkinout.summarysalary)
  checkinouts: Checkinout[];
}
