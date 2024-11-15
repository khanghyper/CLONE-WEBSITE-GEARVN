import { Connection } from 'mongoose';
import { FoodSchema } from 'src/food/food.model';



export const foodProviders = [
  {
    provide: 'FOOD_MODEL',
    useFactory: (connection: Connection) => connection.model('Food', FoodSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
