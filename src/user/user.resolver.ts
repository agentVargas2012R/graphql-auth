import { User } from './user.type';
import { UserService } from './user.service';
import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { Claim } from '../claims/claim.type';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Mutation((result) => String)
  async login(@Args('id') id: string) {
    const user = await this.userService.getUserById(id);
    return this.userService.createToken(user);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<User> {
    return this.userService.getUserById(reference.id);
  }
}
