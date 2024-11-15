import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Cat } from 'src/cat/cat.model';

export const FoodSchema = new mongoose.Schema({
  name: String,
  cat: {
    type: mongoose.Types.ObjectId,
    ref: 'Cat'
  }
},
  {
    timestamps: true,
    collection: 'Foods'
  }
);


export interface Food extends Document {
  readonly name: string;
  readonly cat: Cat;
}
