import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Order } from '../entities/order.entity';
export declare class CheckinoutSubscriber implements EntitySubscriberInterface<Order> {
    constructor(dataSource: DataSource);
    listenTo(): typeof Order;
    beforeInsert(event: InsertEvent<Order>): Promise<void | Promise<any>>;
    afterUpdate(event: UpdateEvent<Order>): Promise<void>;
}
