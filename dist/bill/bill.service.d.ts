import { Employee } from 'src/employees/entities/employee.entity';
import { Material } from 'src/materials/entities/material.entity';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { BillDetail } from './entities/bill-detail';
import { Bill } from './entities/bill.entity';
export declare class BillService {
    private billRepository;
    private employeeRepository;
    private billdetailRepository;
    private materialRepository;
    constructor(billRepository: Repository<Bill>, employeeRepository: Repository<Employee>, billdetailRepository: Repository<BillDetail>, materialRepository: Repository<Material>);
    create(createBillDto: CreateBillDto): Promise<Bill>;
    findAll(): Promise<Bill[]>;
    findOne(id: number): Promise<Bill>;
    update(id: number, updateBillDto: UpdateBillDto): string;
    remove(id: number): Promise<Bill>;
}
