import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './owner.entity';
import { OwnerDto } from './owner.dto';

@Resolver('Owner')
export class OwnerResolvers {
  constructor(private readonly ownerService: OwnerService) {}

  @Query()
  async owners() {
    return await this.ownerService.findAll();
  }

  @Query()
  async owner(id: string) {
    return await this.ownerService.findOne(id);
  }

  @Mutation()
  async createOwner(@Args('input') args: OwnerDto): Promise<Owner> {
    return await this.ownerService.create(args);
  }

  @Mutation()
  async replaceOwner(@Args('input') args: OwnerDto) {
    await this.ownerService.replaceOne(args);
    return true;
  }

  @Mutation()
  async deleteOwner(id: string) {
    await this.ownerService.deleteOne(id);
    return true;
  }
}
