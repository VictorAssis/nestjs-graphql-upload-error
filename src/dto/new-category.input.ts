import { ArgsType, Field } from "@nestjs/graphql";
import { IsString, MinLength } from "class-validator";
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@ArgsType()
export class NewCategoryInput {
  @Field()
  @IsString()
  @MinLength(3, { message: 'Name too short.' })
  name: string;

  @Field(type => GraphQLUpload)
  file: FileUpload
}