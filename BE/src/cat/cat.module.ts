import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { DatabaseModule } from 'src/database/database.module';
import { catProviders } from 'src/cat/cat.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService, ...catProviders],
})
export class CatModule { }
