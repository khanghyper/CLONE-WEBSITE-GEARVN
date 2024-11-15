import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Food, FoodSchema } from 'src/food/food.model';

export interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly foods: Food[];
}

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  foods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }]
},
  {
    timestamps: true,
    collection: 'Cats'
  }
);





