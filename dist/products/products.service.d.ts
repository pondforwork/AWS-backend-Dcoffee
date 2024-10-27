import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Product>, categoriesRepository: Repository<Category>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findByCategory(id: number): Promise<Product[]>;
    findAll(option: any): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        price: number;
        type: string;
        size: string;
        image: string;
        categoryId: number;
        id: number;
        discount: number;
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
        orderItems: import("../orders/entities/order-item").OrderItem[];
        category: Category;
    } & Product>;
    remove(id: number): Promise<Product>;
}
