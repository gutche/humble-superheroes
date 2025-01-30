import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { SuperheroDto } from './superheroes.dto';

interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humility: number;
}

@Controller('superheroes')
export class SuperheroesController {
  private superheroes: Superhero[] = [
    {
      id: 1,
      name: 'Captain Kindness',
      superpower: 'Healing Touch',
      humility: 9,
    },
    {
      id: 2,
      name: 'The Modest Mystic',
      superpower: 'Reality Manipulation',
      humility: 8,
    },
    { id: 3, name: 'Humble Hulk', superpower: 'Super Strength', humility: 7 },
    {
      id: 4,
      name: 'Selfless Speedster',
      superpower: 'Super Speed',
      humility: 10,
    },
    {
      id: 5,
      name: 'The Gentle Guardian',
      superpower: 'Force Fields',
      humility: 6,
    },
  ];

  private nextId = this.superheroes.length + 1;

  @Post()
  addSuperhero(@Body(new ValidationPipe()) superhero: SuperheroDto) {
    const newHero = { ...superhero, id: this.nextId++ };
    this.superheroes.push(newHero);
    return { message: 'Superhero added!', superhero: newHero };
  }

  @Get()
  getSuperheroes() {
    return this.superheroes.sort((a, b) => b.humility - a.humility);
  }
}
