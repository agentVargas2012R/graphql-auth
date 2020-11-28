import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './claim.entity';
import { Args } from '@nestjs/graphql';

@Injectable()
export class ClaimService {
  constructor(
    @InjectRepository(Claim) private claimRepository: Repository<Claim>,
  ) {}
  async getUserClaimsById(
    @Args('studentId') studentId: string,
  ): Promise<Claim[]> {
    console.log(
      this.claimRepository
        .createQueryBuilder()
        .select('cl')
        .from(Claim, 'cl')
        .where('cl."studentId" = :studentID', {
          studentID: studentId,
        })
        .getSql(),
    );

    console.log(studentId);
    return await this.claimRepository
      .createQueryBuilder()
      .select('cl')
      .from(Claim, 'cl')
      .where('cl.studentId = :studentID', {
        studentID: studentId,
      })
      .getMany();
  }
}
