import { Injectable } from '@nestjs/common';
import { CreateTimeDwDto } from './dto/create-time-dw.dto';
import { UpdateTimeDwDto } from './dto/update-time-dw.dto';

@Injectable()
export class TimeDwService {
  create(createTimeDwDto: CreateTimeDwDto) {
    return 'This action adds a new timeDw';
  }

  findAll() {
    return `This action returns all timeDw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeDw`;
  }

  update(id: number, updateTimeDwDto: UpdateTimeDwDto) {
    return `This action updates a #${id} timeDw`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeDw`;
  }
}
