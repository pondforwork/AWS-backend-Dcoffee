import { StoreDwService } from './store-dw.service';
import { CreateStoreDwDto } from './dto/create-store-dw.dto';
import { UpdateStoreDwDto } from './dto/update-store-dw.dto';
export declare class StoreDwController {
    private readonly storeDwService;
    constructor(storeDwService: StoreDwService);
    create(createStoreDwDto: CreateStoreDwDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStoreDwDto: UpdateStoreDwDto): string;
    remove(id: string): string;
}
