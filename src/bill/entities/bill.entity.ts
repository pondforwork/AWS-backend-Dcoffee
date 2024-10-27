import { Employee } from 'src/employees/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BillDetail } from './bill-detail';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: '128' })
  shop_name: string;

  @Column({ type: 'float', nullable: true })
  total: number;

  @Column({ type: 'float', nullable: true })
  buy: number;

  @Column({ type: 'float', nullable: true })
  change: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @ManyToOne(() => Employee, (employee) => employee.bill)
  employee: Employee;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => BillDetail, (billDetail) => billDetail.bill)
  billDetails: BillDetail[];
}
