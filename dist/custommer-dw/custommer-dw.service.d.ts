import { CreateCustommerDwDto } from './dto/create-custommer-dw.dto';
import { UpdateCustommerDwDto } from './dto/update-custommer-dw.dto';
export declare class CustommerDwService {
    create(createCustommerDwDto: CreateCustommerDwDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustommerDwDto: UpdateCustommerDwDto): string;
    remove(id: number): string;
}
