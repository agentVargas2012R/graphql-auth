import { Directive, Field, ObjectType, ID } from '@nestjs/graphql';

/* eslint-disable prettier/prettier */
@ObjectType('Claim')
@Directive('@key(fields: "studentId")')
export class Claim {

  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  studentId: string;
}
