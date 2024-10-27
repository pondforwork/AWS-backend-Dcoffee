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
exports.EmployeeDwController = void 0;
const common_1 = require("@nestjs/common");
const employee_dw_service_1 = require("./employee-dw.service");
const create_employee_dw_dto_1 = require("./dto/create-employee-dw.dto");
const update_employee_dw_dto_1 = require("./dto/update-employee-dw.dto");
let EmployeeDwController = class EmployeeDwController {
    constructor(employeeDwService) {
        this.employeeDwService = employeeDwService;
    }
    create(createEmployeeDwDto) {
        return this.employeeDwService.create(createEmployeeDwDto);
    }
    findAll() {
        return this.employeeDwService.findAll();
    }
    findOne(id) {
        return this.employeeDwService.findOne(+id);
    }
    update(id, updateEmployeeDwDto) {
        return this.employeeDwService.update(+id, updateEmployeeDwDto);
    }
    remove(id) {
        return this.employeeDwService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dw_dto_1.CreateEmployeeDwDto]),
    __metadata("design:returntype", void 0)
], EmployeeDwController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeDwController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeDwController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dw_dto_1.UpdateEmployeeDwDto]),
    __metadata("design:returntype", void 0)
], EmployeeDwController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeDwController.prototype, "remove", null);
EmployeeDwController = __decorate([
    (0, common_1.Controller)('employee-dw'),
    __metadata("design:paramtypes", [employee_dw_service_1.EmployeeDwService])
], EmployeeDwController);
exports.EmployeeDwController = EmployeeDwController;
//# sourceMappingURL=employee-dw.controller.js.map