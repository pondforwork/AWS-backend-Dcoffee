"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const check_material_entity_1 = require("./entities/check_material.entity");
const typeorm_2 = require("typeorm");
const check_material_detail_1 = require("./entities/check_material_detail");
const material_entity_1 = require("../materials/entities/material.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
let CheckMaterialService = class CheckMaterialService {
    constructor(checkMaterialsRepository, checkMaterialDetailsRepository, materialsRepository, employeesRepository) {
        this.checkMaterialsRepository = checkMaterialsRepository;
        this.checkMaterialDetailsRepository = checkMaterialDetailsRepository;
        this.materialsRepository = materialsRepository;
        this.employeesRepository = employeesRepository;
    }
    async create(createCheckMaterialDto) {
        const employee = await this.employeesRepository.findOneBy({
            id: createCheckMaterialDto.employeeId,
        });
        if (!employee) {
            throw new common_1.NotFoundException();
        }
        const checkM = new check_material_entity_1.CheckMaterial();
        checkM.employee = employee;
        checkM.date = new Date().toLocaleDateString();
        checkM.time = new Date().toLocaleTimeString();
        await this.checkMaterialsRepository.save(checkM);
        for (const cmd of createCheckMaterialDto.check_material_detail) {
            const checkMD = new check_material_detail_1.CheckMaterialDetail();
            checkMD.material = await this.materialsRepository.findOneBy({
                id: cmd.materialId,
            });
            checkMD.name = checkMD.material.name;
            checkMD.qty_last = checkMD.material.quantity;
            checkMD.qty_remain = cmd.qty_remain;
            checkMD.qty_expire = cmd.qty_expire;
            checkMD.check_material = checkM;
            checkMD.material.quantity = cmd.qty_remain;
            await this.materialsRepository.save(checkMD.material);
            await this.checkMaterialDetailsRepository.save(checkMD);
        }
        await this.checkMaterialsRepository.save(checkM);
        return await this.checkMaterialsRepository.findOne({
            where: { id: checkM.id },
            relations: ['check_material_detail', 'employee'],
        });
    }
    findAll() {
        return this.checkMaterialsRepository.find({
            relations: ['check_material_detail', 'employee'],
        });
    }
    async findAllDetail() {
        const query = await this.checkMaterialDetailsRepository.createQueryBuilder('CheckMatDetail');
        const q = await query
            .select('DISTINCT CheckMatDetail.name', 'name')
            .getRawMany();
        return q;
    }
    async findOne(id) {
        const checkM = await this.checkMaterialsRepository.findOne({
            where: { id: id },
            relations: ['check_material_detail', 'employee'],
        });
        if (!checkM) {
            throw new common_1.NotFoundException();
        }
        return checkM;
    }
    update(id, updateCheckMaterialDto) {
        return `This action updates a #${id} checkMaterial`;
    }
    async remove(id) {
        const checkM = await this.checkMaterialsRepository.findOneBy({ id: id });
        if (!checkM) {
            throw new common_1.NotFoundException();
        }
        return this.checkMaterialsRepository.softRemove(checkM);
    }
};
CheckMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(check_material_entity_1.CheckMaterial)),
    __param(1, (0, typeorm_1.InjectRepository)(check_material_detail_1.CheckMaterialDetail)),
    __param(2, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __param(3, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CheckMaterialService);
exports.CheckMaterialService = CheckMaterialService;
//# sourceMappingURL=check_material.service.js.map