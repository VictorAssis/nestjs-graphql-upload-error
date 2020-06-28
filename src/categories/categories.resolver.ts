import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NewCategoryInput } from '../dto/new-category.input';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver('Categories')
export class CategoriesResolver {
  @Query(returns => String)
  async example() {
    return 'example'
  }

  @Mutation(returns => String)
  async createWithDtoWithoutValidation (@Args() newCategory: NewCategoryInput) {
    const file = await newCategory.file
    return `It works ${file.filename}`
  }

  @Mutation(returns => String)
  async createWithoutDtoWithoutValidation (@Args({ name: 'file', type: () => GraphQLUpload}) file: FileUpload) {
    return `It works ${file.filename}`
  }

  @Mutation(returns => String)
  @UsePipes(ValidationPipe)
  async createWithDtoWithValidation (@Args() newCategory: NewCategoryInput) {
    const file = await newCategory.file
    return `It does not work ${file.filename}`
  }

  @Mutation(returns => String)
  @UsePipes(ValidationPipe)
  async createWithoutDtoWithValidation (@Args({ name: 'file', type: () => GraphQLUpload}) file: FileUpload) {
    return `It works ${file.filename}`
  }
}
