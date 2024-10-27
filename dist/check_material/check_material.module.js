"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMaterialModule = void 0;
const common_1 = require("@nestjs/common");
const check_material_service_1 = require("./check_material.service");
const check_material_controller_1 = require("./check_material.controller");
const typeorm_1 = require("@nestjs/typeorm");
const check_material_entity_1 = require("./entities/check_material.entity");
const check_material_detail_1 = require("./entities/check_material_detail");
const material_entity_1 = require("../materials/entities/material.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
let CheckMaterialModule = class CheckMaterialModule {
};
CheckMaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                check_material_entity_1.CheckMaterial,
                check_material_detail_1.CheckMaterialDetail,
                material_entity_1.Material,
                employee_entity_1.Employee,
            ]),
        ],
        controllers: [check_material_controller_1.CheckMaterialController],
        providers: [check_material_service_1.CheckMaterialService],
    })
], CheckMaterialModule);
exports.CheckMaterialModule = CheckMaterialModule;
//# sourceMappingURL=check_material.module.js.map