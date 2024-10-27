import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SummarysalaryService } from './summarysalary.service';
import { CreateSummarysalaryDto } from './dto/create-summarysalary.dto';
import { UpdateSummarysalaryDto } from './dto/update-summarysalary.dto';

@Controller('summarysalary')
export class SummarysalaryController {
  constructor(private readonly summarysalaryService: SummarysalaryService) {}

  @Post()
  create() {
    return this.summarysalaryService.create();
  }

  @Get()
  findAll() {
    return this.summarysalaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.summarysalaryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSummarysalaryDto: UpdateSummarysalaryDto,
  ) {
    return this.summarysalaryService.update(+id, updateSummarysalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.summarysalaryService.remove(+id);
  }
}
