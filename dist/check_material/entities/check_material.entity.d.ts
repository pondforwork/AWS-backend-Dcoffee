import { Employee } from 'src/employees/entities/employee.entity';
import { CheckMaterialDetail } from './check_material_detail';
export declare class CheckMaterial {
    id: number;
    date: string;
    time: string;
    employee: Employee;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    check_material_detail: CheckMaterialDetail[];
}
