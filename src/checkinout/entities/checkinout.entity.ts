import { Employee } from 'src/employees/entities/employee.entity';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Checkinout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  time_in: string;

  @Column({ nullable: true })
  time_out: string;

  @Column({ nullable: true, type: 'float' })
  total_hour: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.checkinouts)
  employee: Employee;

  @ManyToOne(() => Summarysalary, (summarysalary) => summarysalary.checkinouts)
  summarysalary: Summarysalary;
}
