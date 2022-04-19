import { Request } from 'express';
import { UserEntity } from '../user.entity';
export interface ExporessRequest extends Request {
  user?: UserEntity;
}
