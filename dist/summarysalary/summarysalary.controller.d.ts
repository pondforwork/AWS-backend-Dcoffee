import { SummarysalaryService } from './summarysalary.service';
import { UpdateSummarysalaryDto } from './dto/update-summarysalary.dto';
export declare class SummarysalaryController {
    private readonly summarysalaryService;
    constructor(summarysalaryService: SummarysalaryService);
    create(): Promise<number>;
    findAll(): Promise<import("./entities/summarysalary.entity").Summarysalary[]>;
    findOne(id: string): Promise<import("./entities/summarysalary.entity").Summarysalary>;
    update(id: string, updateSummarysalaryDto: UpdateSummarysalaryDto): Promise<{
        workhour: number;
        salary: number;
        id: number;
        Date: string;
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
        checkinouts: import("../checkinout/entities/checkinout.entity").Checkinout[];
    } & import("./entities/summarysalary.entity").Summarysalary>;
    remove(id: string): Promise<import("./entities/summarysalary.entity").Summarysalary>;
}
