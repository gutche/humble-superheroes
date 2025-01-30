import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { Superhero } from './superheroes.dto';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  describe('addSuperhero', () => {
    it('should successfully add a valid superhero', () => {
      const newHero: Superhero = {
        name: 'Test Hero',
        superpower: 'Test Power',
        humility: 5,
      };

      const result = controller.addSuperhero(newHero);
      expect(result).toEqual({
        message: 'Superhero added!',
        superhero: newHero,
      });

      const heroes = controller.getSuperheroes();
      expect(heroes).toContainEqual(newHero);
    });

    it('should reject superhero with humility below 1', async () => {
      const invalidHero: Superhero = {
        name: 'Invalid Hero',
        superpower: 'Test Power',
        humility: 0,
      };

      const validationPipe = new ValidationPipe();

      await expect(
        validationPipe.transform(invalidHero, {
          type: 'body',
          metatype: Superhero,
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should reject superhero with humility above 10', async () => {
      const invalidHero: Superhero = {
        name: 'Invalid Hero',
        superpower: 'Test Power',
        humility: 11,
      };

      const validationPipe = new ValidationPipe();

      await expect(
        validationPipe.transform(invalidHero, {
          type: 'body',
          metatype: Superhero,
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
