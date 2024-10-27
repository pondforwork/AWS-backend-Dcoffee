import { Material } from 'src/materials/entities/material.entity';
import { Bill } from './bill.entity';
export declare class BillDetail {
    id: number;
    name: string;
    amount: number;
    price: number;
    total: number;
    bill: Bill;
    material: Material;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
