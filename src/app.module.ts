import {Module} from '@nestjs/common';
import {CarModule} from './car/car.module';
import {OwnerModule} from './owner/owner.module';
import {MongooseModule} from '@nestjs/mongoose';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver} from '@nestjs/apollo';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/car-poc'),

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
    CarModule,
    OwnerModule,
  ],
})
export class AppModule {
}
