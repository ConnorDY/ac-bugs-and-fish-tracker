import type { Creature, Months, Location, Shadow, Time } from './shared';

export interface FishOrBug {
  name: string;
  icon: string;
  type: Creature;
  price: number;
  shadow?: Shadow; // only available for fish
  location: Location[] | string;
  weather?: {
    rainOnly?: boolean; // only available when raining
    noRain?: boolean; // only available when not raining
  };
  time: Time;
  months: Months;
}
