import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [CarModule, UserModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
