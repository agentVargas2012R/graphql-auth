import { Directive, Field, ObjectType, ID } from '@nestjs/graphql';

/* eslint-disable prettier/prettier */
@ObjectType('User')
@Directive('@key(fields: "id")')
export class User {

  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
