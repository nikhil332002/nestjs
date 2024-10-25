import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MockSchema, userSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: userSchema.name, schema: MockSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
