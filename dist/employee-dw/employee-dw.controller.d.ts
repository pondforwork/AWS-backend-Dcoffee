import { EmployeeDwService } from './employee-dw.service';
import { CreateEmployeeDwDto } from './dto/create-employee-dw.dto';
import { UpdateEmployeeDwDto } from './dto/update-employee-dw.dto';
export declare class EmployeeDwController {
    private readonly employeeDwService;
    constructor(employeeDwService: EmployeeDwService);
    create(createEmployeeDwDto: CreateEmployeeDwDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeDwDto: UpdateEmployeeDwDto): string;
    remove(id: string): string;
}
