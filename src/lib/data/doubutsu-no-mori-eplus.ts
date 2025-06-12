/**
 * Doubutsu no Mori e+ (どうぶつの森 e+)
 **/

import { type FishOrBug } from '$lib/types/fish-or-bug';
import type { Game } from '$lib/types/game';
import { Creature, Location, Month, Shadow, TimeOfDay, Weather } from '$lib/types/shared';

const fish: FishOrBug[] = [
  // 1
  {
    name: 'Crucian Carp',
    icon: 'crucian-carp.png',
    type: Creature.FISH,
    price: 120,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 2
  {
    name: 'Brook Trout',
    icon: 'brook-trout.png',
    type: Creature.FISH,
    price: 150,
    shadow: Shadow.MEDIUM,
    location: [Location.LAKE],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 3
  {
    name: 'Carp',
    icon: 'carp.png',
    type: Creature.FISH,
    price: 300,
    shadow: Shadow.LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 4
  {
    name: 'Koi',
    icon: 'koi.png',
    type: Creature.FISH,
    price: 2000,
    shadow: Shadow.LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 16, // 4 PM
        end: 9 // 9 AM
      }
    ],
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 5
  {
    name: 'Barbel steed',
    icon: 'barbel-steed.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 6
  {
    name: 'Dace',
    icon: 'dace.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.MEDIUM,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 16, // 4 PM
        end: 9 // 9 AM
      }
    ],
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 7
  {
    name: 'Catfish',
    icon: 'catfish.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 16, // 4 PM
        end: 9 // 9 AM
      }
    ],
    months: {
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL
    }
  },
  // 8
  {
    name: 'Giant catfish',
    icon: 'giant-catfish.png',
    type: Creature.FISH,
    price: 3000,
    shadow: Shadow.VERY_LARGE,
    location: [Location.LAKE],
    weather: Weather.ANY,
    time: [
      {
        start: 16, // 4 PM
        end: 9 // 9 AM
      }
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    }
  },
  // 9
  {
    name: 'Pale chub',
    icon: 'pale-chub.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 9, // 9 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 10
  {
    name: 'Bitterling',
    icon: 'bitterling.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.TINY,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      december: Month.ALL
    }
  },
  // 11
  {
    name: 'Loach',
    icon: 'loach.png',
    type: Creature.FISH,
    price: 300,
    shadow: Shadow.TINY,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL
    }
  },
  // 12
  {
    name: 'Bluegill',
    icon: 'bluegill.png',
    type: Creature.FISH,
    price: 120,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 9, // 9 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 13
  {
    name: 'Small bass',
    icon: 'small-bass.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 14
  {
    name: 'Bass',
    icon: 'bass.png',
    type: Creature.FISH,
    price: 300,
    shadow: Shadow.MEDIUM,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  },
  // 15
  {
    name: 'Large bass',
    icon: 'large-bass.png',
    type: Creature.FISH,
    price: 3000,
    shadow: Shadow.LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    }
  }
];

const bugs: FishOrBug[] = [
  // 1
  {
    name: 'Common Butterfly',
    icon: 'common-butterfly.png',
    type: Creature.BUG,
    price: 80,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL
    }
  },
  // 2
  {
    name: 'Yellow Butterfly',
    icon: 'yellow-butterfly.png',
    type: Creature.BUG,
    price: 80,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL
    }
  },
  // 3
  {
    name: 'Tiger butterfly',
    icon: 'tiger-butterfly.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    }
  }
];

export const DoubutsuNoMoriEPlus: Game = {
  name: 'Doubutsu no Mori e+',
  path: 'doubutsu-no-mori-eplus',
  releaseDate: '2003-06-27',
  languages: ['japanese'],
  fish,
  bugs
};
