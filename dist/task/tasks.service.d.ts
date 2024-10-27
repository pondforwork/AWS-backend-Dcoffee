import { SchedulerRegistry } from '@nestjs/schedule';
import { DataSource } from 'typeorm';
export declare class TasksService {
    private schedulerRegistry;
    private DataSource;
    constructor(schedulerRegistry: SchedulerRegistry, DataSource: DataSource);
}
