import { NestMiddleware } from '@nestjs/common';

export class AuthMiddleware implements NestMiddleware {
  async use(req, res, next) {
    console.log('AuthMiddleware', req.headers);
    next();
  }
}
