import { TimeDwService } from './time-dw.service';
import { CreateTimeDwDto } from './dto/create-time-dw.dto';
import { UpdateTimeDwDto } from './dto/update-time-dw.dto';
export declare class TimeDwController {
    private readonly timeDwService;
    constructor(timeDwService: TimeDwService);
    create(createTimeDwDto: CreateTimeDwDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTimeDwDto: UpdateTimeDwDto): string;
    remove(id: string): string;
}
