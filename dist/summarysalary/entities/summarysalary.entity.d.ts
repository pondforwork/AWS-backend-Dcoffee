import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
export declare class Summarysalary {
    id: number;
    workhour: number;
    salary: number;
    Date: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    checkinouts: Checkinout[];
}
