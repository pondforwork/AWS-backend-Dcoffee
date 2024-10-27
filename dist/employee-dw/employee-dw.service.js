"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDwService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeDwService = class EmployeeDwService {
    create(createEmployeeDwDto) {
        return 'This action adds a new employeeDw';
    }
    findAll() {
        return `This action returns all employeeDw`;
    }
    findOne(id) {
        return `This action returns a #${id} employeeDw`;
    }
    update(id, updateEmployeeDwDto) {
        return `This action updates a #${id} employeeDw`;
    }
    remove(id) {
        return `This action removes a #${id} employeeDw`;
    }
};
EmployeeDwService = __decorate([
    (0, common_1.Injectable)()
], EmployeeDwService);
exports.EmployeeDwService = EmployeeDwService;
//# sourceMappingURL=employee-dw.service.js.map