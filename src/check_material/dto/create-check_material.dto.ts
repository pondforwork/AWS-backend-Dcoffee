import { IsNotEmpty } from 'class-validator';

class CreateCheckMaterialDetailDto {
  @IsNotEmpty()
  materialId: number;

  @IsNotEmpty()
  qty_remain: number;

  @IsNotEmpty()
  qty_expire: number;
}
export class CreateCheckMaterialDto {
  @IsNotEmpty()
  employeeId: number;

  @IsNotEmpty()
  check_material_detail: CreateCheckMaterialDetailDto[];
}
