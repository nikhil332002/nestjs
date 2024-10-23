import { Module } from '@nestjs/common';
import { MsgController } from './msg.controller';
import { MsgRepository } from './msg.repository';
import { MsgServices } from './msg.services';

@Module({
  controllers: [MsgController],
  providers: [MsgRepository,MsgServices]
})
export class MsgModule {}
