import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CustommerDw {
  @PrimaryColumn()
  Customer_dw_id: number;

  @Column({ length: '128' })
  Customer_dw_name: string;

  @Column()
  Customer_dw_startdate: Date;
}
