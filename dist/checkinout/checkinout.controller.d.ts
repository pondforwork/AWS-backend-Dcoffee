import { CheckinoutService } from './checkinout.service';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { UpdateCheckinoutDto } from './dto/update-checkinout.dto';
export declare class CheckinoutController {
    private readonly checkinoutService;
    constructor(checkinoutService: CheckinoutService);
    create(createCheckinoutDto: CreateCheckinoutDto): Promise<import("./entities/checkinout.entity").Checkinout>;
    findAll(): Promise<import("./entities/checkinout.entity").Checkinout[]>;
    findStage(email: string): Promise<boolean>;
    findByEmail(email: string): Promise<import("./entities/checkinout.entity").Checkinout[]>;
    findOne(id: string): Promise<import("./entities/checkinout.entity").Checkinout>;
    update(updateCheckinoutDto: UpdateCheckinoutDto): Promise<import("./entities/checkinout.entity").Checkinout>;
    remove(id: string): Promise<import("./entities/checkinout.entity").Checkinout>;
}
