import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  type: string;

  size: string;

  image = 'no_image_available.jpg';

  @IsNotEmpty()
  categoryId: number;
}
