import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeDwService } from './time-dw.service';
import { CreateTimeDwDto } from './dto/create-time-dw.dto';
import { UpdateTimeDwDto } from './dto/update-time-dw.dto';

@Controller('time-dw')
export class TimeDwController {
  constructor(private readonly timeDwService: TimeDwService) {}

  @Post()
  create(@Body() createTimeDwDto: CreateTimeDwDto) {
    return this.timeDwService.create(createTimeDwDto);
  }

  @Get()
  findAll() {
    return this.timeDwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeDwService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeDwDto: UpdateTimeDwDto) {
    return this.timeDwService.update(+id, updateTimeDwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeDwService.remove(+id);
  }
}
