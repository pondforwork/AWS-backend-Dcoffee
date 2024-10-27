import { CreateCheckMaterialDto } from './dto/create-check_material.dto';
import { UpdateCheckMaterialDto } from './dto/update-check_material.dto';
import { CheckMaterial } from './entities/check_material.entity';
import { Repository } from 'typeorm';
import { CheckMaterialDetail } from './entities/check_material_detail';
import { Material } from 'src/materials/entities/material.entity';
import { Employee } from 'src/employees/entities/employee.entity';
export declare class CheckMaterialService {
    private checkMaterialsRepository;
    private checkMaterialDetailsRepository;
    private materialsRepository;
    private employeesRepository;
    constructor(checkMaterialsRepository: Repository<CheckMaterial>, checkMaterialDetailsRepository: Repository<CheckMaterialDetail>, materialsRepository: Repository<Material>, employeesRepository: Repository<Employee>);
    create(createCheckMaterialDto: CreateCheckMaterialDto): Promise<CheckMaterial>;
    findAll(): Promise<CheckMaterial[]>;
    findAllDetail(): Promise<any[]>;
    findOne(id: number): Promise<CheckMaterial>;
    update(id: number, updateCheckMaterialDto: UpdateCheckMaterialDto): string;
    remove(id: number): Promise<CheckMaterial>;
}
