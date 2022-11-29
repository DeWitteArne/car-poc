import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './car.entity';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async findAll(): Promise<Car[]> {
    return await this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return await this.carModel
      .findOne({ id: new mongoose.Types.ObjectId(id) })
      .exec();
  }

  async create(carDto: CarDto): Promise<Car> {
    const createdCar = new this.carModel(carDto);
    createdCar.id = new mongoose.Types.ObjectId();
    return await createdCar.save();
  }

  async replaceOne(carDto: CarDto) {
    const updatedCar = new this.carModel(carDto);
    await this.carModel
      .replaceOne({ id: new mongoose.Types.ObjectId(carDto.id) }, updatedCar)
      .exec();
  }

  async deleteOne(id: string) {
    await this.carModel.deleteOne({ id: new mongoose.Types.ObjectId(id) });
  }
}
