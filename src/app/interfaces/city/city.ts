import { Temperature } from '../temperature/temperature';
import { Weather } from '../weather/weather';

export interface City {
  id: number;
  name: string;
  main: Temperature;
  weather: Weather[];
}
