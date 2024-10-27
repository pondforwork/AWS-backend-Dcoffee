import { Bill } from 'src/bill/entities/bill.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { CheckMaterial } from 'src/check_material/entities/check_material.entity';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Employee {
    id: number;
    name: string;
    tel: string;
    email: string;
    address: string;
    position: string;
    hourly_wage: number;
    bill: Bill[];
    checkinouts: Checkinout[];
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    check_mateial: CheckMaterial[];
    user: User;
    orders: Order[];
}
