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
exports.StoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const store_entity_1 = require("./entities/store.entity");
let StoresService = class StoresService {
    constructor(storesRepository) {
        this.storesRepository = storesRepository;
    }
    create(createStoreDto) {
        return this.storesRepository.save(createStoreDto);
    }
    findAll() {
        return this.storesRepository.find();
    }
    findOne(id) {
        return this.storesRepository.findOne({ where: { id } });
    }
    async update(id, updateStoreDto) {
        const store = await this.storesRepository.findOneBy({ id });
        if (!store) {
            throw new common_1.NotFoundException();
        }
        const updatedEmployee = Object.assign(Object.assign({}, store), updateStoreDto);
        return this.storesRepository.save(updatedEmployee);
    }
    async remove(id) {
        const store = await this.storesRepository.findOneBy({ id });
        if (!store) {
            throw new common_1.NotFoundException();
        }
        return this.storesRepository.softRemove(store);
    }
};
StoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(store_entity_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoresService);
exports.StoresService = StoresService;
//# sourceMappingURL=stores.service.js.map