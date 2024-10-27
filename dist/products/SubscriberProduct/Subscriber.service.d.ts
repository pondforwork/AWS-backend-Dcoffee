import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare class ProductSubscriber implements EntitySubscriberInterface<Product> {
    constructor(dataSource: DataSource);
    listenTo(): typeof Product;
    beforeInsert(event: InsertEvent<Product>): Promise<void | Promise<any>>;
    afterUpdate(event: UpdateEvent<Product>): Promise<void>;
}
