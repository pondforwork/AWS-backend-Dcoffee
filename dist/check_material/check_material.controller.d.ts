import { CheckMaterialService } from './check_material.service';
import { CreateCheckMaterialDto } from './dto/create-check_material.dto';
import { UpdateCheckMaterialDto } from './dto/update-check_material.dto';
export declare class CheckMaterialController {
    private readonly checkMaterialService;
    constructor(checkMaterialService: CheckMaterialService);
    create(createCheckMaterialDto: CreateCheckMaterialDto): Promise<import("./entities/check_material.entity").CheckMaterial>;
    findAll(): Promise<import("./entities/check_material.entity").CheckMaterial[]>;
    findOne(id: string): Promise<import("./entities/check_material.entity").CheckMaterial>;
    findDetail(): Promise<any[]>;
    update(id: string, updateCheckMaterialDto: UpdateCheckMaterialDto): string;
    remove(id: string): Promise<import("./entities/check_material.entity").CheckMaterial>;
}
