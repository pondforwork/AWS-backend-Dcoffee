import { Order } from 'src/orders/entities/order.entity';
export declare class Customer {
    id: number;
    name: string;
    tel: string;
    point: number;
    startDate: string;
    orders: Order[];
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
