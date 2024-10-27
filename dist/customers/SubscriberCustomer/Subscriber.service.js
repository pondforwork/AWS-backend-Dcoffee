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
exports.CustomerSubscriber = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const customer_entity_1 = require("../entities/customer.entity");
const custommer_dw_entity_1 = require("../../custommer-dw/entities/custommer-dw.entity");
let CustomerSubscriber = class CustomerSubscriber {
    constructor(dataSource, CustomerDWRepository) {
        this.CustomerDWRepository = CustomerDWRepository;
        dataSource.subscribers.push(this);
    }
    listenTo() {
        return customer_entity_1.Customer;
    }
    async beforeInsert(event) {
        console.log('before Insert');
    }
    async afterUpdate(event) {
        console.log('+');
    }
};
CustomerSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __param(1, (0, typeorm_2.InjectRepository)(custommer_dw_entity_1.CustommerDw)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository])
], CustomerSubscriber);
exports.CustomerSubscriber = CustomerSubscriber;
//# sourceMappingURL=Subscriber.service.js.map