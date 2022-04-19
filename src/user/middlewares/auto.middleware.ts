import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('AuthMiddleware', req.headers);
    if (!req.headers.authorization) {
      req.user = null;
      next;
      return;
    }
    next();
  }
}
