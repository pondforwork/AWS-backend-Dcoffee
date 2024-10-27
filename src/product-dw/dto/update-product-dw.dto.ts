import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDwDto } from './create-product-dw.dto';

export class UpdateProductDwDto extends PartialType(CreateProductDwDto) {}
