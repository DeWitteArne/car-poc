import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Owner, OwnerDocument} from './owner.entity';
import {Model} from 'mongoose';
import {OwnerDto} from './owner.dto';

@Injectable()
export class OwnerService {
    constructor(
        @InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>,
    ) {
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerModel.find().exec();
    }

    async findOne(id: string): Promise<Owner> {
        return await this.ownerModel
            .findOne({_id: id})
            .exec();
    }

    async create(ownerDto: OwnerDto): Promise<Owner> {
        const createdOwner = new this.ownerModel(ownerDto);
        return await createdOwner.save();
    }

    async replaceOne(id: string, ownerDto: OwnerDto) {
        const updateOwner = new this.ownerModel(ownerDto);
        await this.ownerModel.updateOne({_id: id}, {
            $set: {
                name: updateOwner.name,
                firstName: updateOwner.firstName
            }
        });
    }

    async deleteOne(id: string) {
        await this.ownerModel.deleteOne({_id: id}).exec()
    }


}
