/// <reference types="multer" />
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, file: Express.Multer.File): Promise<import("./entities/product.entity").Product>;
    findByCategory(id: string): Promise<import("./entities/product.entity").Product[]>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    getImage(id: string, res: Response): Promise<void>;
    getImageByFileName(imageFile: string, res: Response): Promise<void>;
    updateImage(id: string, file: Express.Multer.File): Promise<{
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
        category: import("../categories/entities/category.entity").Category;
    } & import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
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
        category: import("../categories/entities/category.entity").Category;
    } & import("./entities/product.entity").Product>;
    remove(id: string): Promise<import("./entities/product.entity").Product>;
}
