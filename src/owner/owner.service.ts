import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Owner, OwnerDocument } from './owner.entity';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { OwnerDto } from './owner.dto';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async findAll(): Promise<Owner[]> {
    return await this.ownerModel.find().exec();
  }

  async findOne(id: string): Promise<Owner> {
    return await this.ownerModel
      .findOne({ id: new mongoose.Types.ObjectId(id) })
      .exec();
  }

  async create(ownerDto: OwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(ownerDto);
    createdOwner.id = new mongoose.Types.ObjectId();
    return await createdOwner.save();
  }

  async replaceOne(ownerDto: OwnerDto) {
    const updateOwner = new this.ownerModel(ownerDto);
    await this.ownerModel
      .replaceOne({ id: new mongoose.Types.ObjectId(ownerDto.id) }, updateOwner)
      .exec();
  }

  async deleteOne(id: string) {
    await this.ownerModel.deleteOne({ id: new mongoose.Types.ObjectId(id) });
  }
}
