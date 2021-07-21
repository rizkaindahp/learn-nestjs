import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    get() {
      return 'User';
    }

    @Get('/test')
    test() {
      return 'User test';
    }
}
