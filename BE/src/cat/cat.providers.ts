import { Connection } from 'mongoose';
import { CatSchema } from 'src/cat/cat.model';

export const catProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

