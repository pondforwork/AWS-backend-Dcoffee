import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Store } from 'src/stores/entities/store.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-item';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  amount: number;

  @Column({ type: 'float', default: 0 })
  total: number;

  @Column({ type: 'float' })
  recevied: number;

  @Column({ type: 'float', default: 0 })
  change: number;

  @Column()
  payment: string;

  @Column({ default: 0 })
  discount: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @ManyToOne(() => Employee, (employee) => employee.orders)
  employee: Employee;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @ManyToOne(() => Store, (store) => store.orders)
  store: Store;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
