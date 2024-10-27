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
exports.CheckMaterialController = void 0;
const common_1 = require("@nestjs/common");
const check_material_service_1 = require("./check_material.service");
const create_check_material_dto_1 = require("./dto/create-check_material.dto");
const update_check_material_dto_1 = require("./dto/update-check_material.dto");
let CheckMaterialController = class CheckMaterialController {
    constructor(checkMaterialService) {
        this.checkMaterialService = checkMaterialService;
    }
    create(createCheckMaterialDto) {
        return this.checkMaterialService.create(createCheckMaterialDto);
    }
    findAll() {
        return this.checkMaterialService.findAll();
    }
    findOne(id) {
        return this.checkMaterialService.findOne(+id);
    }
    findDetail() {
        return this.checkMaterialService.findAllDetail();
    }
    update(id, updateCheckMaterialDto) {
        return this.checkMaterialService.update(+id, updateCheckMaterialDto);
    }
    remove(id) {
        return this.checkMaterialService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_check_material_dto_1.CreateCheckMaterialDto]),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findDetail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "findDetail", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_check_material_dto_1.UpdateCheckMaterialDto]),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckMaterialController.prototype, "remove", null);
CheckMaterialController = __decorate([
    (0, common_1.Controller)('check-material'),
    __metadata("design:paramtypes", [check_material_service_1.CheckMaterialService])
], CheckMaterialController);
exports.CheckMaterialController = CheckMaterialController;
//# sourceMappingURL=check_material.controller.js.map