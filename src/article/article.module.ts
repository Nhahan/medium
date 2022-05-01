import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService, AuthGuard],
})
export class UserModule {}
