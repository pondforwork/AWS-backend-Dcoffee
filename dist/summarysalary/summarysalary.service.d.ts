import { Repository } from 'typeorm';
import { UpdateSummarysalaryDto } from './dto/update-summarysalary.dto';
import { Summarysalary } from './entities/summarysalary.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { Employee } from 'src/employees/entities/employee.entity';
export declare class SummarysalaryService {
    private summarysalaryRepository;
    private CheckinOutRepository;
    private EmployeeOutRepository;
    constructor(summarysalaryRepository: Repository<Summarysalary>, CheckinOutRepository: Repository<Checkinout>, EmployeeOutRepository: Repository<Employee>);
    create(): Promise<number>;
    findAll(): Promise<Summarysalary[]>;
    findOne(id: number): Promise<Summarysalary>;
    update(id: number, updateSummarysalaryDto: UpdateSummarysalaryDto): Promise<{
        workhour: number;
        salary: number;
        id: number;
        Date: string;
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
        checkinouts: Checkinout[];
    } & Summarysalary>;
    remove(id: number): Promise<Summarysalary>;
}
