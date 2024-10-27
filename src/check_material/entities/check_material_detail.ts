import { Material } from 'src/materials/entities/material.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
} from 'typeorm';
import { CheckMaterial } from './check_material.entity';

@Entity()
export class CheckMaterialDetail {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: '128' })
  name: string;

  @Column({ default: 0 })
  qty_last: number;

  @Column({ nullable: true })
  qty_remain: number;

  @Column({ nullable: true })
  qty_expire: number;

  @ManyToOne(
    () => CheckMaterial,
    (check_material) => check_material.check_material_detail,
  )
  check_material: CheckMaterial;

  @ManyToOne(() => Material, (material) => material.check_material_detail)
  material: Material;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
