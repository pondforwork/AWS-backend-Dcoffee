import { CreateStoreDwDto } from './dto/create-store-dw.dto';
import { UpdateStoreDwDto } from './dto/update-store-dw.dto';
export declare class StoreDwService {
    create(createStoreDwDto: CreateStoreDwDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStoreDwDto: UpdateStoreDwDto): string;
    remove(id: number): string;
}
