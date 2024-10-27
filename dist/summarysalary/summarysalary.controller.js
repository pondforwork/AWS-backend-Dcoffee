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
exports.SummarysalaryController = void 0;
const common_1 = require("@nestjs/common");
const summarysalary_service_1 = require("./summarysalary.service");
const update_summarysalary_dto_1 = require("./dto/update-summarysalary.dto");
let SummarysalaryController = class SummarysalaryController {
    constructor(summarysalaryService) {
        this.summarysalaryService = summarysalaryService;
    }
    create() {
        return this.summarysalaryService.create();
    }
    findAll() {
        return this.summarysalaryService.findAll();
    }
    findOne(id) {
        return this.summarysalaryService.findOne(+id);
    }
    update(id, updateSummarysalaryDto) {
        return this.summarysalaryService.update(+id, updateSummarysalaryDto);
    }
    remove(id) {
        return this.summarysalaryService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummarysalaryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummarysalaryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SummarysalaryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_summarysalary_dto_1.UpdateSummarysalaryDto]),
    __metadata("design:returntype", void 0)
], SummarysalaryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SummarysalaryController.prototype, "remove", null);
SummarysalaryController = __decorate([
    (0, common_1.Controller)('summarysalary'),
    __metadata("design:paramtypes", [summarysalary_service_1.SummarysalaryService])
], SummarysalaryController);
exports.SummarysalaryController = SummarysalaryController;
//# sourceMappingURL=summarysalary.controller.js.map