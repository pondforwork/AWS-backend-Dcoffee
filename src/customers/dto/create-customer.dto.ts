import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  tel: string;

  @IsNotEmpty()
  point: number;

  image = 'no_img_avaliable.jpg';
}
