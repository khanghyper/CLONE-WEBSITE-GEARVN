import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { Public } from 'src/auth/auth.decorator';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Public()
  @Get()
  async getList() {
    return await this.catService.getList();
  }
}
