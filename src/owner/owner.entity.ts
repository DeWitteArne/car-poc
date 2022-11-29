import {HydratedDocument} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
    @Prop()
    name: string;

    @Prop()
    firstName: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
