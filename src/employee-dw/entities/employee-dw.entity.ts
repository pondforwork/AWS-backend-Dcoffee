import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class EmployeeDw {
  @PrimaryColumn()
  Employee_dw_id: number;

  @Column({ length: '128' })
  Employee_dw_name: string;
}
