import { IsNotEmpty } from 'class-validator';

class CreatedOrderItemDto {
  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  amount: number;
}
export class CreateOrderDto {
  @IsNotEmpty()
  empId: number;

  @IsNotEmpty()
  tel: string;

  @IsNotEmpty()
  storeId: number;

  @IsNotEmpty()
  discount: number;

  @IsNotEmpty()
  payment: string;

  @IsNotEmpty()
  recevied: number;

  @IsNotEmpty()
  orderItems: CreatedOrderItemDto[];
}
