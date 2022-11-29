import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Car, CarSchema} from './car.entity';
import {CarService} from './car.service';
import {CarResolvers} from './car.resolvers';
import {Owner, OwnerSchema} from "../owner/owner.entity";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Car.name, schema: CarSchema}, {name: Owner.name, schema: OwnerSchema}]),
    ],
    providers: [CarService, CarResolvers],
})
export class CarModule {
}
