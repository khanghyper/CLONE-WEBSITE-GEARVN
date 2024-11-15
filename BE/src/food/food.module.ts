import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { foodProviders } from 'src/food/food.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FoodController],
  providers: [FoodService, ...foodProviders],
})
export class FoodModule { }
