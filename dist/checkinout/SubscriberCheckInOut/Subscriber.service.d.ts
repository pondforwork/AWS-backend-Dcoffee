import { DataSource, EntitySubscriberInterface, InsertEvent, Repository, UpdateEvent } from 'typeorm';
import { Checkinout } from '../entities/checkinout.entity';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
export declare class CheckinoutSubscriber implements EntitySubscriberInterface<Checkinout> {
    private SummarysalaryRepository;
    private CheckRepository;
    constructor(dataSource: DataSource, SummarysalaryRepository: Repository<Summarysalary>, CheckRepository: Repository<Checkinout>);
    listenTo(): typeof Checkinout;
    beforeInsert(event: InsertEvent<Checkinout>): Promise<void | Promise<any>>;
    afterUpdate(event: UpdateEvent<Checkinout>): Promise<void>;
}
