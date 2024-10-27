import { Employee } from 'src/employees/entities/employee.entity';
export declare class User {
    id: number;
    name: string;
    tel: string;
    email: string;
    role: string;
    password: string;
    image: string;
    employee: Employee;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
