import { ConsoleLogger, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExporessRequest } from '../types/expressRequest.interface';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';

export class AuthMiddleware implements NestMiddleware {
  async use(req: ExporessRequest, res: Response, next: NextFunction) {
    console.log('AuthMiddleware', req.headers);
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET);
      console.log('decode', decode);
      next();
    } catch (err) {
      req.user = null;
      next();
    }

    next();
  }
}
