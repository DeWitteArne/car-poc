import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop({ type: mongoose.Types.ObjectId })
  id: string;

  @Prop()
  name: string;

  @Prop()
  firstName: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
