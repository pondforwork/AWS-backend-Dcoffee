import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  IsNull,
  Repository,
  UpdateEvent,
} from 'typeorm';
import * as data from './file.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from '../entities/store.entity';
import { StoreDw } from 'src/store-dw/entities/store-dw.entity';

async function FindProvince(address: string) {
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
    } else {
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

function FindDstProvince(District: string) {
  const regex = /[อ][ำ][ก-๙]*/;
  const match = District.match(regex);
  const DstProvince = match ? match[0] : null;
  if (DstProvince != null) {
    const regex = /อำเภอ/g;
    const parts = match[0].split(regex);

    return parts.length > 1 ? parts[1] : parts[0];
  } else {
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

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface<Store> {
  constructor(
    dataSource: DataSource,
    @InjectRepository(StoreDw)
    private StoreDwRepository: Repository<StoreDw>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Store;
  }
  async beforeInsert(event: InsertEvent<Store>) {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Store>) {
    console.log('+');
  }

  async afterInsert(event: InsertEvent<Store>) {
    const address = event.entity.address;

    const Store_Dw = new StoreDw();
    const data = await FindProvince(address);
    Store_Dw.Store_dw_id = event.entity.id;
    Store_Dw.Store_dw_name = event.entity.name;
    Store_Dw.Store_dw_city = data.Province;
    Store_Dw.Store_dw_district = FindDstProvince(address);
    Store_Dw.Store_dw_region = data.Region;

    console.log(Store_Dw);

    await this.StoreDwRepository.save(Store_Dw);
  }
}
