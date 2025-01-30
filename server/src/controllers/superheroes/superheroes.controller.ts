import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { Superhero } from './superheroes.dto';

@Controller('superheroes')
export class SuperheroesController {
  private superheroes: Superhero[] = [
    { name: 'Captain Kindness', superpower: 'Healing Touch', humility: 9 },
    {
      name: 'The Modest Mystic',
      superpower: 'Reality Manipulation',
      humility: 8,
    },
    { name: 'Humble Hulk', superpower: 'Super Strength', humility: 7 },
    { name: 'Selfless Speedster', superpower: 'Super Speed', humility: 10 },
    { name: 'The Gentle Guardian', superpower: 'Force Fields', humility: 6 },
  ];

  @Post()
  addSuperhero(@Body(new ValidationPipe()) superhero: Superhero) {
    this.superheroes.push(superhero);
    return { message: 'Superhero added!', superhero };
  }

  @Get()
  getSuperheroes() {
    // return superhero list in descending order
    return this.superheroes.sort((a, b) => b.humility - a.humility);
  }
}
