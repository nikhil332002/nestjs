import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerService } from '../power/power.service';

@Module({
  providers: [CpuService,PowerService],
  exports: [CpuService],
})
export class CpuModule {}
