import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Car, CarDocument} from './car.entity';
import {Model} from 'mongoose';
import {CarDto} from './car.dto';
import {Owner, OwnerDocument} from "../owner/owner.entity";

@Injectable()
export class CarService {
    constructor(@InjectModel(Car.name) private readonly carModel: Model<CarDocument>, @InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>) {
    }

    async findAll(): Promise<Car[]> {
        return await this.carModel.find().populate('owner').exec();
    }

    async findOne(id: string): Promise<Car> {
        console.log(id)
        const car = await this.carModel
            .findOne({_id: id}).populate('owner')
            .exec();
        console.log(car)
        return car
    }

    async create(carDto: CarDto): Promise<Car> {
        const createdCar = new this.carModel(carDto);
        return await createdCar.save();
    }

    async replaceOne(id: string, carDto: CarDto) {
        const updatedCar = new this.carModel(carDto);
        console.log(id)
        //TODO: this shit doesn't work
        this.carModel.updateOne({_id: id}, {
            $set: {
                name: updatedCar.name,
                model: updatedCar.model,
                color: updatedCar.color,
                price: updatedCar.price,
            }
        })
    }

    async deleteOne(id: string) {
        console.log(id)
        await this.carModel.deleteOne({_id: id}).exec();
    }
}
