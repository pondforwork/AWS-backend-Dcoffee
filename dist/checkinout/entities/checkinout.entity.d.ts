import { Employee } from 'src/employees/entities/employee.entity';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
export declare class Checkinout {
    id: number;
    date: string;
    time_in: string;
    time_out: string;
    total_hour: number;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    employee: Employee;
    summarysalary: Summarysalary;
}
