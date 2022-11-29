import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Owner } from '../owner/owner.entity';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ type: mongoose.Types.ObjectId })
  id: string;

  @Prop()
  name: string;

  @Prop()
  model: string;

  @Prop()
  color: string;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;
}

export const CarSchema = SchemaFactory.createForClass(Car);
