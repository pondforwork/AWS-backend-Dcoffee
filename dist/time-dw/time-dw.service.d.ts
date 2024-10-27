import { CreateTimeDwDto } from './dto/create-time-dw.dto';
import { UpdateTimeDwDto } from './dto/update-time-dw.dto';
export declare class TimeDwService {
    create(createTimeDwDto: CreateTimeDwDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTimeDwDto: UpdateTimeDwDto): string;
    remove(id: number): string;
}
