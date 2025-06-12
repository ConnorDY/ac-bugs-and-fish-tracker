import type { Creature, Months, Location, Shadow, Time, Weather } from './shared';

export interface FishOrBug {
  name: string;
  icon: string;
  type: Creature;
  price: number;
  shadow?: Shadow; // only available for fish
  location: Location[] | string;
  weather: Weather;
  time: Time;
  months: Months;
}
