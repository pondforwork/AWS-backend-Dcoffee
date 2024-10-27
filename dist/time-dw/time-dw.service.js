"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeDwService = void 0;
const common_1 = require("@nestjs/common");
let TimeDwService = class TimeDwService {
    create(createTimeDwDto) {
        return 'This action adds a new timeDw';
    }
    findAll() {
        return `This action returns all timeDw`;
    }
    findOne(id) {
        return `This action returns a #${id} timeDw`;
    }
    update(id, updateTimeDwDto) {
        return `This action updates a #${id} timeDw`;
    }
    remove(id) {
        return `This action removes a #${id} timeDw`;
    }
};
TimeDwService = __decorate([
    (0, common_1.Injectable)()
], TimeDwService);
exports.TimeDwService = TimeDwService;
//# sourceMappingURL=time-dw.service.js.map