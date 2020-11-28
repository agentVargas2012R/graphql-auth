import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ClaimModule } from './claims/claim.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    UserModule,
    ClaimModule,
  ],
  providers: [],
})
export class AppModule {}
