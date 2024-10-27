import { CreateEmployeeDwDto } from './dto/create-employee-dw.dto';
import { UpdateEmployeeDwDto } from './dto/update-employee-dw.dto';
export declare class EmployeeDwService {
    create(createEmployeeDwDto: CreateEmployeeDwDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmployeeDwDto: UpdateEmployeeDwDto): string;
    remove(id: number): string;
}
