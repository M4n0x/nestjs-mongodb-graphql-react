import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
