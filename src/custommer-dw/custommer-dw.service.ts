import { Injectable } from '@nestjs/common';
import { CreateCustommerDwDto } from './dto/create-custommer-dw.dto';
import { UpdateCustommerDwDto } from './dto/update-custommer-dw.dto';

@Injectable()
export class CustommerDwService {
  create(createCustommerDwDto: CreateCustommerDwDto) {
    return 'This action adds a new custommerDw';
  }

  findAll() {
    return `This action returns all custommerDw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} custommerDw`;
  }

  update(id: number, updateCustommerDwDto: UpdateCustommerDwDto) {
    return `This action updates a #${id} custommerDw`;
  }

  remove(id: number) {
    return `This action removes a #${id} custommerDw`;
  }
}
