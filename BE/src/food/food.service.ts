import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Food } from 'src/food/food.model';

@Injectable()
export class FoodService {
  constructor(
    @Inject('FOOD_MODEL')
    private foodModel: Model<Food>,
  ) { }

  getList = async () => {
    await this.foodModel.create({
      name: 'Fish',
    })
    return {
      message: 'OK',
      data: await this.foodModel.find({})
    }
  }
}
