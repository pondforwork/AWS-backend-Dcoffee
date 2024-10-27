import { CreateProductDwDto } from './dto/create-product-dw.dto';
import { UpdateProductDwDto } from './dto/update-product-dw.dto';
export declare class ProductDwService {
    create(createProductDwDto: CreateProductDwDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductDwDto: UpdateProductDwDto): string;
    remove(id: number): string;
}
