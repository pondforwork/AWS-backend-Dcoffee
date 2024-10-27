import { Bill } from 'src/bill/entities/bill.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { CheckMaterial } from 'src/check_material/entities/check_material.entity';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '128' })
  name: string;

  @Column({ length: '10' })
  tel: string;

  @Column({ length: '128', unique: true })
  email: string;

  @Column({ length: '255' })
  address: string;

  @Column({ length: '128' })
  position: string;

  @Column({ type: 'float' })
  hourly_wage: number;

  @OneToMany(() => Bill, (bill) => bill.employee)
  bill: Bill[];

  @OneToMany(() => Checkinout, (checkinout) => checkinout.employee)
  checkinouts: Checkinout[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => CheckMaterial, (check_mateial) => check_mateial.employee)
  check_mateial: CheckMaterial[];

  @OneToOne(() => User, (user) => user.employee)
  @JoinColumn()
  user: User;

  @OneToMany(() => Order, (order) => order.employee)
  orders: Order[];
}
