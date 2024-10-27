import { Repository } from 'typeorm';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { Checkinout } from './entities/checkinout.entity';
import { Employee } from 'src/employees/entities/employee.entity';
export declare class CheckinoutService {
    private checkinoutRepository;
    private employeesRepository;
    constructor(checkinoutRepository: Repository<Checkinout>, employeesRepository: Repository<Employee>);
    create(createCheckinoutDto: CreateCheckinoutDto): Promise<Checkinout>;
    findAll(): Promise<Checkinout[]>;
    findOne(id: number): Promise<Checkinout>;
    findByEmail(email: string): Promise<Checkinout[]>;
    findCheckStage(email: string): Promise<boolean>;
    update(data: any): Promise<Checkinout>;
    remove(id: number): Promise<Checkinout>;
}
