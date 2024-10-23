import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerService } from 'src/power/power.service';

@Module({
  providers: [DiskService,PowerService],
  exports: [DiskService]
})
export class DiskModule {}
