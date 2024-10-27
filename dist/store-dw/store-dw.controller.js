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
exports.StoreDwController = void 0;
const common_1 = require("@nestjs/common");
const store_dw_service_1 = require("./store-dw.service");
const create_store_dw_dto_1 = require("./dto/create-store-dw.dto");
const update_store_dw_dto_1 = require("./dto/update-store-dw.dto");
let StoreDwController = class StoreDwController {
    constructor(storeDwService) {
        this.storeDwService = storeDwService;
    }
    create(createStoreDwDto) {
        return this.storeDwService.create(createStoreDwDto);
    }
    findAll() {
        return this.storeDwService.findAll();
    }
    findOne(id) {
        return this.storeDwService.findOne(+id);
    }
    update(id, updateStoreDwDto) {
        return this.storeDwService.update(+id, updateStoreDwDto);
    }
    remove(id) {
        return this.storeDwService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dw_dto_1.CreateStoreDwDto]),
    __metadata("design:returntype", void 0)
], StoreDwController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreDwController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreDwController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_dw_dto_1.UpdateStoreDwDto]),
    __metadata("design:returntype", void 0)
], StoreDwController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreDwController.prototype, "remove", null);
StoreDwController = __decorate([
    (0, common_1.Controller)('store-dw'),
    __metadata("design:paramtypes", [store_dw_service_1.StoreDwService])
], StoreDwController);
exports.StoreDwController = StoreDwController;
//# sourceMappingURL=store-dw.controller.js.map