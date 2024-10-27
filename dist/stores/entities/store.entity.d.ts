import { Order } from 'src/orders/entities/order.entity';
export declare class Store {
    id: number;
    name: string;
    address: string;
    tel: string;
    orders: Order[];
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
