import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
export declare class CustomersService {
    private customersRepository;
    constructor(customersRepository: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<{
        name: string;
        tel: string;
        point: number;
        image?: string;
        id: number;
        startDate: string;
        orders: import("../orders/entities/order.entity").Order[];
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
    } & Customer>;
    remove(id: number): Promise<Customer>;
}
