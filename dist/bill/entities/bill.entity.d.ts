import { Employee } from 'src/employees/entities/employee.entity';
import { BillDetail } from './bill-detail';
export declare class Bill {
    id: number;
    shop_name: string;
    total: number;
    buy: number;
    change: number;
    date: string;
    time: string;
    employee: Employee;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    billDetails: BillDetail[];
}
