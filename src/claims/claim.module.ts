import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Claim } from './claim.entity';
import { ClaimResolver } from './claim.resolver';
import { ClaimService } from './claim.service';

@Module({
  imports: [TypeOrmModule.forFeature([Claim])],
  providers: [ClaimResolver, ClaimService],
  exports: [ClaimService],
})
export class ClaimModule {}
