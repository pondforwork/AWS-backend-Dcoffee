import { DataSource, EntitySubscriberInterface, InsertEvent, Repository, UpdateEvent } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { CustommerDw } from 'src/custommer-dw/entities/custommer-dw.entity';
export declare class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
    private CustomerDWRepository;
    constructor(dataSource: DataSource, CustomerDWRepository: Repository<CustommerDw>);
    listenTo(): typeof Customer;
    beforeInsert(event: InsertEvent<Customer>): Promise<void>;
    afterUpdate(event: UpdateEvent<Customer>): Promise<void>;
}
