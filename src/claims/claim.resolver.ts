import { Args, Query } from '@nestjs/graphql';
import { ResolveReference } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ClaimService } from './claim.service';
import { Claim } from './claim.type';

@Resolver((of) => Claim)
export class ClaimResolver {
  constructor(private claimService: ClaimService) {}

  @Query((result) => [Claim])
  async getUserClaimsById(@Args('studentId') studentId: string) {
    return await this.claimService.getUserClaimsById(studentId);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    studentId: string;
  }): Promise<Claim[]> {
    return this.claimService.getUserClaimsById(reference.studentId);
  }
}
