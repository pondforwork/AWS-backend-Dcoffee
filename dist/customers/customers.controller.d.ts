import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("./entities/customer.entity").Customer>;
    findAll(): Promise<import("./entities/customer.entity").Customer[]>;
    findOne(id: string): Promise<import("./entities/customer.entity").Customer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
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
    } & import("./entities/customer.entity").Customer>;
    remove(id: string): Promise<import("./entities/customer.entity").Customer>;
}
