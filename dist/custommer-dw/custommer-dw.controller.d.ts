import { CustommerDwService } from './custommer-dw.service';
import { CreateCustommerDwDto } from './dto/create-custommer-dw.dto';
import { UpdateCustommerDwDto } from './dto/update-custommer-dw.dto';
export declare class CustommerDwController {
    private readonly custommerDwService;
    constructor(custommerDwService: CustommerDwService);
    create(createCustommerDwDto: CreateCustommerDwDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCustommerDwDto: UpdateCustommerDwDto): string;
    remove(id: string): string;
}
