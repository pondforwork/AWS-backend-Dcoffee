import { Injectable, Logger } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Interval,
  SchedulerRegistry,
  Timeout,
} from '@nestjs/schedule';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { exec } from 'child_process';

@Injectable()
export class TasksService {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    @InjectDataSource()
    private DataSource: DataSource,
  ) {}
  // @Cron(CronExpression.EVERY_5_SECONDS)
  // async handleCron() {
  //   const res = await this.DataSource.query('SELECT * FROM product');
  //   console.log(res);
  // }

  // @Interval(5000)
  // handleInterval() {
  //   const customEnv = {
  //     PATH: './ETL',
  //   };

  //   exec(`python -u ETL/ETL.py`, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`exec error: ${error}`);
  //       return;
  //     }

  //     console.log(`stdout: ${stdout}`);
  //     console.error(`stderr: ${stderr}`);
  //   });
  // }

  // @Timeout(5000)
  // handleTimeout() {
  //   this.logger.debug('Called once after 5 seconds');
  // }
}
