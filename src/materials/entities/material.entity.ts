import { BillDetail } from 'src/bill/entities/bill-detail';
import { CheckMaterialDetail } from 'src/check_material/entities/check_material_detail';
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
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 64,
  })
  name: string;

  @Column()
  min_quantity: number;

  @Column()
  quantity: number;

  @Column({
    length: 64,
  })
  unit: string;

  @Column()
  price_per_unit: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(() => BillDetail, (billDetail) => billDetail.material)
  billDetails: BillDetail[];

  @OneToMany(
    () => CheckMaterialDetail,
    (check_material_detail) => check_material_detail.material,
  )
  check_material_detail: CheckMaterialDetail[];
}
