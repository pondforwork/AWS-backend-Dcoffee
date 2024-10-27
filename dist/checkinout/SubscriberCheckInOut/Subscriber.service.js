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
exports.CheckinoutSubscriber = void 0;
const typeorm_1 = require("typeorm");
const checkinout_entity_1 = require("../entities/checkinout.entity");
const typeorm_2 = require("@nestjs/typeorm");
const summarysalary_entity_1 = require("../../summarysalary/entities/summarysalary.entity");
let CheckinoutSubscriber = class CheckinoutSubscriber {
    constructor(dataSource, SummarysalaryRepository, CheckRepository) {
        this.SummarysalaryRepository = SummarysalaryRepository;
        this.CheckRepository = CheckRepository;
        dataSource.subscribers.push(this);
    }
    listenTo() {
        return checkinout_entity_1.Checkinout;
    }
    async beforeInsert(event) {
        console.log('before Insert');
    }
    async afterUpdate(event) {
    }
};
CheckinoutSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __param(1, (0, typeorm_2.InjectRepository)(summarysalary_entity_1.Summarysalary)),
    __param(2, (0, typeorm_2.InjectRepository)(checkinout_entity_1.Checkinout)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CheckinoutSubscriber);
exports.CheckinoutSubscriber = CheckinoutSubscriber;
//# sourceMappingURL=Subscriber.service.js.map