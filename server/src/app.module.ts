import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesController } from './controllers/superheroes/superheroes.controller';

@Module({
  imports: [],
  controllers: [AppController, SuperheroesController],
  providers: [AppService],
})
export class AppModule {}
