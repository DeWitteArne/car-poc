import {Injectable} from '@nestjs/common';
import {CarService} from './car.service';
import {Args, Mutation, Query} from '@nestjs/graphql';
import {Car} from './car.entity';
import {CarDto} from './car.dto';

@Injectable()
export class CarResolvers {
    constructor(private readonly carService: CarService) {
    }

    @Query()
    async cars() {
        return await this.carService.findAll();
    }

    @Query()
    async car(@Args('id') id: string): Promise<Car> {
        console.log("id in resolver: " + id)

        return await this.carService.findOne(id);
    }

    @Mutation()
    async createCar(@Args('input') args: CarDto): Promise<Car> {
        return await this.carService.create(args);
    }

    @Mutation()
    async replaceCar(@Args('id') id: string, @Args('input') args: CarDto) {
        await this.carService.replaceOne(id, args);
        return true;
    }

    @Mutation()
    async deleteCar(@Args('id') id: string) {
        await this.carService.deleteOne(id);
        return true;
    }
}
