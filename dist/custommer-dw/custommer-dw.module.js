"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustommerDwModule = void 0;
const common_1 = require("@nestjs/common");
const custommer_dw_service_1 = require("./custommer-dw.service");
const custommer_dw_controller_1 = require("./custommer-dw.controller");
const typeorm_1 = require("@nestjs/typeorm");
const custommer_dw_entity_1 = require("./entities/custommer-dw.entity");
let CustommerDwModule = class CustommerDwModule {
};
CustommerDwModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([custommer_dw_entity_1.CustommerDw])],
        controllers: [custommer_dw_controller_1.CustommerDwController],
        providers: [custommer_dw_service_1.CustommerDwService],
    })
], CustommerDwModule);
exports.CustommerDwModule = CustommerDwModule;
//# sourceMappingURL=custommer-dw.module.js.map