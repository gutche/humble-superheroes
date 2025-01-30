import { IsInt, IsString, Min, Max } from 'class-validator';

export class Superhero {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(1, { message: 'Humility score must be at least 1.' })
  @Max(10, { message: 'Humility score cannot exceed 10.' })
  humility: number;
}
