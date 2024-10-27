import { Material } from 'src/materials/entities/material.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Bill } from './bill.entity';

@Entity()
export class BillDetail {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: '128' })
  name: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  total: number;

  @ManyToOne(() => Bill, (bill) => bill.billDetails)
  bill: Bill;

  @ManyToOne(() => Material, (materials) => materials.billDetails)
  material: Material; //

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
