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
exports.CheckinoutController = void 0;
const common_1 = require("@nestjs/common");
const checkinout_service_1 = require("./checkinout.service");
const create_checkinout_dto_1 = require("./dto/create-checkinout.dto");
const update_checkinout_dto_1 = require("./dto/update-checkinout.dto");
let CheckinoutController = class CheckinoutController {
    constructor(checkinoutService) {
        this.checkinoutService = checkinoutService;
    }
    create(createCheckinoutDto) {
        return this.checkinoutService.create(createCheckinoutDto);
    }
    findAll() {
        return this.checkinoutService.findAll();
    }
    findStage(email) {
        return this.checkinoutService.findCheckStage(email);
    }
    findByEmail(email) {
        return this.checkinoutService.findByEmail(email);
    }
    findOne(id) {
        return this.checkinoutService.findOne(+id);
    }
    update(updateCheckinoutDto) {
        return this.checkinoutService.update(updateCheckinoutDto);
    }
    remove(id) {
        return this.checkinoutService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_checkinout_dto_1.CreateCheckinoutDto]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('Stage/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "findStage", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_checkinout_dto_1.UpdateCheckinoutDto]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckinoutController.prototype, "remove", null);
CheckinoutController = __decorate([
    (0, common_1.Controller)('checkinout'),
    __metadata("design:paramtypes", [checkinout_service_1.CheckinoutService])
], CheckinoutController);
exports.CheckinoutController = CheckinoutController;
//# sourceMappingURL=checkinout.controller.js.map