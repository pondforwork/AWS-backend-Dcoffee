import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Employee } from '../entities/employee.entity';
export declare class EmployeeSubscriber implements EntitySubscriberInterface<Employee> {
    constructor(dataSource: DataSource);
    listenTo(): {
        new (): ElementInternals;
        prototype: ElementInternals;
    };
    beforeInsert(event: InsertEvent<Employee>): Promise<void | Promise<any>>;
    afterUpdate(event: UpdateEvent<Employee>): Promise<void>;
}
