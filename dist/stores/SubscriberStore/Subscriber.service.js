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
exports.StoreSubscriber = void 0;
const typeorm_1 = require("typeorm");
const data = require("./file.json");
const typeorm_2 = require("@nestjs/typeorm");
const store_entity_1 = require("../entities/store.entity");
const store_dw_entity_1 = require("../../store-dw/entities/store-dw.entity");
async function FindProvince(address) {
    const regex = /(?:จังหวัด|จ\.)[ก-๙]*/;
    const matches = address.match(regex);
    const strProvince = matches ? matches.join('') : '';
    const Province = strProvince.split('จ.');
    console.log(Province);
    for (const item of data.ProvinceandRegionComprehensive) {
        const split = item.ProvinceNameThai.split('จังหวัด');
        if (Province.length == 1) {
            const Region = Province[0].match(split[1]);
            if (Region) {
                return {
                    Province: split[1],
                    Region: item.RegionName,
                };
            }
        }
        else {
            const Region = Province[1].match(split[1]);
            if (Region) {
                return {
                    Province: split[1],
                    Region: item.RegionName,
                };
            }
        }
    }
}
function FindDstProvince(District) {
    const regex = /[อ][ำ][ก-๙]*/;
    const match = District.match(regex);
    const DstProvince = match ? match[0] : null;
    if (DstProvince != null) {
        const regex = /อำเภอ/g;
        const parts = match[0].split(regex);
        return parts.length > 1 ? parts[1] : parts[0];
    }
    else {
        const regex1 = /[อ]\.[ก-๙]*/g;
        const matches = District.match(regex1);
        const DstProvince = matches ? matches[0] : null;
        if (DstProvince) {
            const regex2 = /อ./g;
            const parts = DstProvince.split(regex2);
            return parts.length > 1 ? parts[1] : parts[0];
        }
    }
}
let StoreSubscriber = class StoreSubscriber {
    constructor(dataSource, StoreDwRepository) {
        this.StoreDwRepository = StoreDwRepository;
        dataSource.subscribers.push(this);
    }
    listenTo() {
        return store_entity_1.Store;
    }
    async beforeInsert(event) {
        console.log('before Insert');
    }
    async afterUpdate(event) {
        console.log('+');
    }
    async afterInsert(event) {
        const address = event.entity.address;
        const Store_Dw = new store_dw_entity_1.StoreDw();
        const data = await FindProvince(address);
        Store_Dw.Store_dw_id = event.entity.id;
        Store_Dw.Store_dw_name = event.entity.name;
        Store_Dw.Store_dw_city = data.Province;
        Store_Dw.Store_dw_district = FindDstProvince(address);
        Store_Dw.Store_dw_region = data.Region;
        console.log(Store_Dw);
        await this.StoreDwRepository.save(Store_Dw);
    }
};
StoreSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __param(1, (0, typeorm_2.InjectRepository)(store_dw_entity_1.StoreDw)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository])
], StoreSubscriber);
exports.StoreSubscriber = StoreSubscriber;
//# sourceMappingURL=Subscriber.service.js.map