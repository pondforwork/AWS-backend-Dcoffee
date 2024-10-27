"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDwModule = void 0;
const common_1 = require("@nestjs/common");
const store_dw_service_1 = require("./store-dw.service");
const store_dw_controller_1 = require("./store-dw.controller");
const typeorm_1 = require("@nestjs/typeorm");
const store_dw_entity_1 = require("./entities/store-dw.entity");
let StoreDwModule = class StoreDwModule {
};
StoreDwModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([store_dw_entity_1.StoreDw])],
        controllers: [store_dw_controller_1.StoreDwController],
        providers: [store_dw_service_1.StoreDwService],
    })
], StoreDwModule);
exports.StoreDwModule = StoreDwModule;
//# sourceMappingURL=store-dw.module.js.map