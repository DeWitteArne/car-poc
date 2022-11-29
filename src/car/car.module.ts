import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './car.entity';
import { CarService } from './car.service';
import { CarResolvers } from './car.resolvers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }], 'car'),
  ],
  providers: [CarService, CarResolvers],
  exports: [CarService],
})
export class CarModule {}
