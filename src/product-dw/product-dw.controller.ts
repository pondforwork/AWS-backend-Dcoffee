import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductDwService } from './product-dw.service';
import { CreateProductDwDto } from './dto/create-product-dw.dto';
import { UpdateProductDwDto } from './dto/update-product-dw.dto';

@Controller('product-dw')
export class ProductDwController {
  constructor(private readonly productDwService: ProductDwService) {}

  @Post()
  create(@Body() createProductDwDto: CreateProductDwDto) {
    return this.productDwService.create(createProductDwDto);
  }

  @Get()
  findAll() {
    return this.productDwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDwService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDwDto: UpdateProductDwDto,
  ) {
    return this.productDwService.update(+id, updateProductDwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDwService.remove(+id);
  }
}
