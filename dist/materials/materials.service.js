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
exports.MaterialsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const material_entity_1 = require("./entities/material.entity");
const typeorm_2 = require("typeorm");
let MaterialsService = class MaterialsService {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    create(createMaterialDto) {
        return this.materialRepository.save(createMaterialDto);
    }
    findAll() {
        return this.materialRepository.find();
    }
    findOne(id) {
        return this.materialRepository.findOne({ where: { id: id } });
    }
    async update(id, updateMaterialDto) {
        const material = await this.materialRepository.findOneBy({ id });
        if (!material) {
            throw new common_1.NotFoundException();
        }
        const updatedMaterial = Object.assign(Object.assign({}, material), updateMaterialDto);
        return this.materialRepository.save(updatedMaterial);
    }
    async remove(id) {
        const material = await this.materialRepository.findOne({
            where: { id: id },
        });
        if (!material) {
            throw new common_1.NotFoundException();
        }
        return this.materialRepository.remove(material);
    }
};
MaterialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MaterialsService);
exports.MaterialsService = MaterialsService;
//# sourceMappingURL=materials.service.js.map