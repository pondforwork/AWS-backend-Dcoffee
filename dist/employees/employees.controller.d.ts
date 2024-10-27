import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("./entities/employee.entity").Employee>;
    findAll(): Promise<import("./entities/employee.entity").Employee[]>;
    findOne(id: string): Promise<import("./entities/employee.entity").Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        name: string;
        tel: string;
        email: string;
        address: string;
        position: string;
        hourly_wage: number;
        id: number;
        bill: import("../bill/entities/bill.entity").Bill[];
        checkinouts: import("../checkinout/entities/checkinout.entity").Checkinout[];
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
        check_mateial: import("../check_material/entities/check_material.entity").CheckMaterial[];
        user: import("../users/entities/user.entity").User;
        orders: import("../orders/entities/order.entity").Order[];
    } & import("./entities/employee.entity").Employee>;
    remove(id: string): Promise<import("./entities/employee.entity").Employee>;
}
