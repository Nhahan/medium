import { Controller, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}
  @Post()
  async create() {
    return 'Create Article';
  }
}
