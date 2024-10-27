import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private employeesRepository;
    private userRepository;
    constructor(employeesRepository: Repository<Employee>, userRepository: Repository<User>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<{
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
        user: User;
        orders: import("../orders/entities/order.entity").Order[];
    } & Employee>;
    remove(id: number): Promise<Employee>;
}
