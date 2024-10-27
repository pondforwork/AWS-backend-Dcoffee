import { DataSource, EntitySubscriberInterface, InsertEvent, Repository, UpdateEvent } from 'typeorm';
import { Store } from '../entities/store.entity';
import { StoreDw } from 'src/store-dw/entities/store-dw.entity';
export declare class StoreSubscriber implements EntitySubscriberInterface<Store> {
    private StoreDwRepository;
    constructor(dataSource: DataSource, StoreDwRepository: Repository<StoreDw>);
    listenTo(): typeof Store;
    beforeInsert(event: InsertEvent<Store>): Promise<void>;
    afterUpdate(event: UpdateEvent<Store>): Promise<void>;
    afterInsert(event: InsertEvent<Store>): Promise<void>;
}
