import { Order } from 'src/orders/entities/order.entity';
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
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '128' })
  name: string;

  @Column({ length: '255' })
  address: string;

  @Column({ length: '10' })
  tel: string;

  @OneToMany(() => Order, (order) => order.store)
  orders: Order[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
