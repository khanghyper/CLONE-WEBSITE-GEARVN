import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat } from 'src/cat/cat.model';

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) { }

  getList = async () => {
    const cats = await this.catModel.find().populate('foods');

    return {
      message: 'OK',
      data: cats
    }
  }
}
