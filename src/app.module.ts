import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoriesResolver } from './categories/categories.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, CategoriesResolver],
})
export class AppModule {}
