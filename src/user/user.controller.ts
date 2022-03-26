import { Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  @Post()
  async createUser(): Promise<any> {
    return 'createUser';
  }
}
