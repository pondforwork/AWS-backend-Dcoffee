import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductDw {
  @PrimaryColumn()
  Prod_dw_id: number;

  @Column()
  Prod_dw_name: string;

  @Column({ type: 'float' })
  Prod_dw_price: number;

  @Column()
  Prod_dw_category: string;
}
