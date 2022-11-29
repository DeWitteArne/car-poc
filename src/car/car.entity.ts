import * as mongoose from 'mongoose';
import {HydratedDocument} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Owner} from '../owner/owner.entity';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {

    @Prop()
    name: string;

    @Prop()
    model: string;

    @Prop()
    color: string;

    @Prop()
    price: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Owner'})
    owner: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
