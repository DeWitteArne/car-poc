import { Injectable } from '@nestjs/common';
import { CarService } from './car.service';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Car } from './car.entity';
import { CarDto } from './car.dto';

@Injectable()
export class CarResolvers {
  constructor(private readonly carService: CarService) {}

  @Query()
  async cars() {
    return await this.carService.findAll();
  }

  @Query()
  async car(id: string): Promise<Car> {
    return await this.carService.findOne(id);
  }

  @Mutation()
  async createCar(@Args('input') args: CarDto): Promise<Car> {
    return await this.carService.create(args);
  }

  @Mutation()
  async replaceCar(@Args('input') args: CarDto) {
    await this.carService.replaceOne(args);
    return true;
  }

  @Mutation()
  async deleteCar(id: string) {
    await this.carService.deleteOne(id);
    return true;
  }
}
