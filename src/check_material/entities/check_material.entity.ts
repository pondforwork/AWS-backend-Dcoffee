import { Employee } from 'src/employees/entities/employee.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Entity,
} from 'typeorm';
import { CheckMaterialDetail } from './check_material_detail';

@Entity()
export class CheckMaterial {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: '128' })
  date: string;

  @Column({ length: '128' })
  time: string;

  @ManyToOne(() => Employee, (employee) => employee.check_mateial)
  employee: Employee;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @OneToMany(
    () => CheckMaterialDetail,
    (check_material_detail) => check_material_detail.check_material,
  )
  check_material_detail: CheckMaterialDetail[];
}
