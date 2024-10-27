import { Product } from 'src/products/entities/product.entity';
import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    name: string;
    amount: number;
    price: number;
    total: number;
    product: Product;
    order: Order;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
