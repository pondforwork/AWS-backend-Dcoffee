import { IsNotEmpty } from 'class-validator';

class CreatedBillDetailDto {
  @IsNotEmpty()
  materialId: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  amount: number;
}

export class CreateBillDto {
  @IsNotEmpty()
  shop_name: string;

  @IsNotEmpty()
  buy: number;

  @IsNotEmpty()
  employeeId: number;

  billDetails: CreatedBillDetailDto[];
}
