import type { Creature, Month, Location, Shadow, Time } from './shared';

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
  months: {
    january?: Month;
    february?: Month;
    march?: Month;
    april?: Month;
    may?: Month;
    june?: Month;
    july?: Month;
    august?: Month;
    september?: Month;
    october?: Month;
    november?: Month;
    december?: Month;
  };
}
