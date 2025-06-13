export enum Creature {
  FISH = 'fish',
  BUG = 'bug'
}

export enum Shadow {
  TINY = 'tiny',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  VERY_LARGE = 'very-large',
  HUGE = 'huge'
}

export enum Location {
  // fish locations
  RIVER = 'river',
  RIVER_MOUTH = 'river-mouth',
  LAKE = 'lake',
  POND = 'pond',
  WATERFALL = 'waterfall',
  SEA = 'sea',
  ANIMAL_ISLAND = 'animal-island',
  // bug locations
  FLYING = 'flying',
  FLYING_AROUND_TREES = 'flying-around-trees',
  FLYING_AROUND_NON_PALM_TREES = 'flying-around-non_palm-trees',
  FLYING_NEAR_WATER = 'flying-near-water',
  ON_FLOWERS = 'on-flowers',
  IN_BUSHES = 'in-bushes',
  ON_THE_GROUND = 'on-the-ground',
  ON_TREES = 'on-trees',
  ON_NON_PALM_TREES = 'on-non_palm-trees',
  IN_TREES = 'in-trees',
  ON_VILLAGERS = 'on-villagers',
  UNDERGROUND = 'underground',
  UNDER_ROCKS = 'under-rocks',
  ON_THE_BEACH = 'on-the-beach',
  PUSHING_BALLS = 'pushing-balls'
}

export enum Weather {
  ANY = 'any',
  RAINING = 'raining', // only available when raining
  NOT_RAINING = 'not-raining' // only available when not raining
}

export type TimeRange = {
  start: number; // start hour in 24-hour format
  end: number; // end hour in 24-hour format
};

export enum TimeOfDay {
  ALL_DAY = 'all-day'
}

export type Time = TimeOfDay | TimeRange[];

export enum Month {
  FIRST_HALF = 'first-half',
  SECOND_HALF = 'second-half',
  ALL = 'all'
}

export interface Months {
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
}
