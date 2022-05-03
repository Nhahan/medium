import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService, AuthGuard],
  exports: [ArticleService],
})
export class UserModule {}
