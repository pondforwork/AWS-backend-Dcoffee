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
exports.CustommerDwController = void 0;
const common_1 = require("@nestjs/common");
const custommer_dw_service_1 = require("./custommer-dw.service");
const create_custommer_dw_dto_1 = require("./dto/create-custommer-dw.dto");
const update_custommer_dw_dto_1 = require("./dto/update-custommer-dw.dto");
let CustommerDwController = class CustommerDwController {
    constructor(custommerDwService) {
        this.custommerDwService = custommerDwService;
    }
    create(createCustommerDwDto) {
        return this.custommerDwService.create(createCustommerDwDto);
    }
    findAll() {
        return this.custommerDwService.findAll();
    }
    findOne(id) {
        return this.custommerDwService.findOne(+id);
    }
    update(id, updateCustommerDwDto) {
        return this.custommerDwService.update(+id, updateCustommerDwDto);
    }
    remove(id) {
        return this.custommerDwService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_custommer_dw_dto_1.CreateCustommerDwDto]),
    __metadata("design:returntype", void 0)
], CustommerDwController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustommerDwController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustommerDwController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_custommer_dw_dto_1.UpdateCustommerDwDto]),
    __metadata("design:returntype", void 0)
], CustommerDwController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustommerDwController.prototype, "remove", null);
CustommerDwController = __decorate([
    (0, common_1.Controller)('custommer-dw'),
    __metadata("design:paramtypes", [custommer_dw_service_1.CustommerDwService])
], CustommerDwController);
exports.CustommerDwController = CustommerDwController;
//# sourceMappingURL=custommer-dw.controller.js.map