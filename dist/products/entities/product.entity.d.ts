import { Category } from 'src/categories/entities/category.entity';
import { OrderItem } from 'src/orders/entities/order-item';
export declare class Product {
    id: number;
    name: string;
    price: number;
    discount: number;
    type: string;
    size: string;
    image: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    orderItems: OrderItem[];
    category: Category;
    categoryId: number;
}
