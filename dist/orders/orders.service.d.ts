import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Product } from 'src/products/entities/product.entity';
import { Store } from 'src/stores/entities/store.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderItem } from './entities/order-item';
import { Order } from './entities/order.entity';
export declare class OrdersService {
    private ordersRepository;
    private customerRepository;
    private productsRepository;
    private orderItemsRepository;
    private employeeRepository;
    private storeRepository;
    constructor(ordersRepository: Repository<Order>, customerRepository: Repository<Customer>, productsRepository: Repository<Product>, orderItemsRepository: Repository<OrderItem>, employeeRepository: Repository<Employee>, storeRepository: Repository<Store>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): Promise<Order>;
}
