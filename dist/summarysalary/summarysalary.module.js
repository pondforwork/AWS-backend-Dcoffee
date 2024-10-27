"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummarysalaryModule = void 0;
const common_1 = require("@nestjs/common");
const summarysalary_service_1 = require("./summarysalary.service");
const summarysalary_controller_1 = require("./summarysalary.controller");
const typeorm_1 = require("@nestjs/typeorm");
const summarysalary_entity_1 = require("./entities/summarysalary.entity");
const checkinout_entity_1 = require("../checkinout/entities/checkinout.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
let SummarysalaryModule = class SummarysalaryModule {
};
SummarysalaryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([summarysalary_entity_1.Summarysalary, checkinout_entity_1.Checkinout, employee_entity_1.Employee])],
        controllers: [summarysalary_controller_1.SummarysalaryController],
        providers: [summarysalary_service_1.SummarysalaryService],
        exports: [summarysalary_service_1.SummarysalaryService],
    })
], SummarysalaryModule);
exports.SummarysalaryModule = SummarysalaryModule;
//# sourceMappingURL=summarysalary.module.js.map