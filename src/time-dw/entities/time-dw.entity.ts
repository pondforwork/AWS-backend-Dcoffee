import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TimeDw {
  @PrimaryColumn({ type: 'date' })
  Time_key: Date;

  @Column({ length: '255' })
  Day_of_week: string;

  @Column()
  Month: number;

  @Column()
  Quarter: number;

  @Column()
  Year: number;
}
