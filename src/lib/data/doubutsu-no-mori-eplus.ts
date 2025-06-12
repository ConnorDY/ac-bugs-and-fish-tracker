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
    },
    wikiPage: 'Crucian_carp#In_Animal_Crossing'
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
    },
    wikiPage: 'Brook_trout#In_Animal_Crossing'
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
    },
    wikiPage: 'Carp#In_Animal_Crossing'
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
    },
    wikiPage: 'Koi#In_Animal_Crossing'
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
    },
    wikiPage: 'Barbel_steed#In_Animal_Crossing'
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
    },
    wikiPage: 'Dace#In_Animal_Crossing'
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
    },
    wikiPage: 'Catfish#In_Animal_Crossing'
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
    },
    wikiPage: 'Giant_catfish#In_Animal_Crossing'
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
    },
    wikiPage: 'Pale_chub#In_Animal_Crossing'
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
    },
    wikiPage: 'Bitterling#In_Animal_Crossing'
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
    },
    wikiPage: 'Loach#In_Animal_Crossing'
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
    },
    wikiPage: 'Bluegill#In_Animal_Crossing'
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
    },
    wikiPage: 'Small_bass#In_Animal_Crossing'
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
    },
    wikiPage: 'Bass#In_Animal_Crossing'
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
    },
    wikiPage: 'Large_bass#In_Animal_Crossing'
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
    },
    wikiPage: 'Common_butterfly#In_Animal_Crossing'
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
    },
    wikiPage: 'Yellow_butterfly#In_Animal_Crossing'
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
    },
    wikiPage: 'Tiger_butterfly#In_Animal_Crossing'
  },
  // 4
  {
    name: 'Purple butterfly',
    icon: 'purple-butterfly.png',
    type: Creature.BUG,
    price: 2000,
    location: [Location.FLYING_AROUND_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Great_purple_emperor#In_Animal_Crossing'
  },
  // 5
  {
    name: "Alexandra's swallowtail butterfly",
    icon: 'alexandras-swallowtail-butterfly.png',
    type: Creature.BUG,
    price: 3000,
    location: [Location.FLYING_AROUND_NON_PALM_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
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
    },
    wikiPage: "Queen_Alexandra's_birdwing#In_Doubutsu_no_Mori_e.2B"
  }
];

export const DoubutsuNoMoriEPlus: Game = {
  name: 'Doubutsu no Mori e+',
  path: 'doubutsu-no-mori-eplus',
  releaseDate: '2003-06-27',
  languages: ['japanese'],
  fish,
  bugs,
  fishWikiPage: 'Fish/Doubutsu_no_Mori_e%2B',
  bugsWikiPage: 'Bug/Doubutsu_no_Mori_e%2B'
};
