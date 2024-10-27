import { Injectable } from '@nestjs/common';
import { CreateProductDwDto } from './dto/create-product-dw.dto';
import { UpdateProductDwDto } from './dto/update-product-dw.dto';

@Injectable()
export class ProductDwService {
  create(createProductDwDto: CreateProductDwDto) {
    return 'This action adds a new productDw';
  }

  findAll() {
    return `This action returns all productDw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productDw`;
  }

  update(id: number, updateProductDwDto: UpdateProductDwDto) {
    return `This action updates a #${id} productDw`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDw`;
  }
}
