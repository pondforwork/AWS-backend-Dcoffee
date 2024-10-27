import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { query } from 'express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/material')
  getMaterial(@Query() query: { searchText?: string }) {
    console.log(query);
    if (query.searchText) {
      return this.reportsService.getMaterialBySearchText(query.searchText);
    }
    return this.reportsService.getMaterial();
  }
  @Get('/info/material')
  getMaterial_info(@Query() query: { searchText?: string }) {
    console.log(query);
    if (query.searchText) {
      return this.reportsService.getMaterialBySearchText(query.searchText);
    }
    return this.reportsService.getMaterial_info();
  }
  @Get('/product')
  getProduct() {
    return this.reportsService.getProduct();
  }
  // @Get('/order')
  // getOder(@Query() query: { od_payment: string }) {
  //   console.log(query);
  //   if (query.od_payment) {
  //     return this.reportsService.getOrder(query.od_payment);
  //   }
  //   return this.reportsService.getOder();

  // @Post()
  // create(@Body() createReportDto: CreateReportDto) {
  //   return this.reportsService.create(createReportDto);
  // }

  // @Get()
  // findAll() {
  //   return this.reportsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reportsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   return this.reportsService.update(+id, updateReportDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportsService.remove(+id);
  // }
}
