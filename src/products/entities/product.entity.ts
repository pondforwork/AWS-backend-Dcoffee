import { Category } from 'src/categories/entities/category.entity';
import { OrderItem } from 'src/orders/entities/order-item';
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

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 64,
  })
  name: string;

  @Column({
    type: 'float',
  })
  price: number;

  @Column({ default: 0 })
  discount: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  size: string;

  @Column({
    length: 128,
    default: 'no_image_available.jpg',
  })
  image: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @Column()
  categoryId: number;
}
