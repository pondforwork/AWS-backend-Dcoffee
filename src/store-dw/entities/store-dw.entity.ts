import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StoreDw {
  @PrimaryColumn()
  Store_dw_id: number;

  @Column({ length: '255' })
  Store_dw_region: string;

  @Column({ length: '255' })
  Store_dw_city: string;

  @Column({ length: '255' })
  Store_dw_district: string;

  @Column({ length: '255' })
  Store_dw_name: string;
}
