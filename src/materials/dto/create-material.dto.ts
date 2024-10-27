import { IsNotEmpty, isPositive } from 'class-validator';

export class CreateMaterialDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  min_quantity: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  unit: string;

  @IsNotEmpty()
  price_per_unit: number;
}
