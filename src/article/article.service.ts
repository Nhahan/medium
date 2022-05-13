import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { CreateArticleDto } from './dto/createArticle.dto';

@Injectable()
export class ArticleService {
  async createArticle(currentUserId: number, createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    return 'createArticle';
  }
}
