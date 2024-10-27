import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Store } from 'src/stores/entities/store.entity';
import { OrderItem } from './order-item';
export declare class Order {
    id: number;
    amount: number;
    total: number;
    recevied: number;
    change: number;
    payment: string;
    discount: number;
    date: string;
    time: string;
    orderItems: OrderItem[];
    employee: Employee;
    customer: Customer;
    store: Store;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
