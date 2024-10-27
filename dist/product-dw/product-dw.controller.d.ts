import { ProductDwService } from './product-dw.service';
import { CreateProductDwDto } from './dto/create-product-dw.dto';
import { UpdateProductDwDto } from './dto/update-product-dw.dto';
export declare class ProductDwController {
    private readonly productDwService;
    constructor(productDwService: ProductDwService);
    create(createProductDwDto: CreateProductDwDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductDwDto: UpdateProductDwDto): string;
    remove(id: string): string;
}
