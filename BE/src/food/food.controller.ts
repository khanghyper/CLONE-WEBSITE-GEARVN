import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';
import { Public } from 'src/auth/auth.decorator';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) { }

  @Public()
  @Get()
  async getList() {
    return await this.foodService.getList();
  }
}
