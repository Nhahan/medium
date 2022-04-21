import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExporessRequest } from '../types/expressRequest.interface';

export class AuthMiddleware implements NestMiddleware {
  async use(req: ExporessRequest, res: Response, next: NextFunction) {
    console.log('AuthMiddleware', req.headers);
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log('token', token);

    next();
  }
}
