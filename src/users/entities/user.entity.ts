import { Employee } from 'src/employees/entities/employee.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: '128' })
  name: string;

  @Column({ length: '10' })
  tel: string;

  @Column({ length: '128', unique: true })
  email: string;

  @Column({ length: '128' })
  role: string;

  @Column({ length: '64', unique: true })
  password: string;

  @Column({
    length: '128',
    default: 'no-image.jpg',
  })
  image: string;

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
