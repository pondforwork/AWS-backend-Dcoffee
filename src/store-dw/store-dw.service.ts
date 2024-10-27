import { Injectable } from '@nestjs/common';
import { CreateStoreDwDto } from './dto/create-store-dw.dto';
import { UpdateStoreDwDto } from './dto/update-store-dw.dto';

@Injectable()
export class StoreDwService {
  create(createStoreDwDto: CreateStoreDwDto) {
    return 'This action adds a new storeDw';
  }

  findAll() {
    return `This action returns all storeDw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeDw`;
  }

  update(id: number, updateStoreDwDto: UpdateStoreDwDto) {
    return `This action updates a #${id} storeDw`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeDw`;
  }
}
