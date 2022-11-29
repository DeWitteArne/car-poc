import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Owner, OwnerSchema} from './owner.entity';
import {OwnerService} from './owner.service';
import {OwnerResolvers} from './owner.resolvers';

@Module({
    providers: [OwnerService, OwnerResolvers],
    imports: [
        MongooseModule.forFeature(
            [{name: Owner.name, schema: OwnerSchema}],
        ),
    ],
})
export class OwnerModule {
}
