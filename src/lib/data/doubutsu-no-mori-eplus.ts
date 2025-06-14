/**
 * Doubutsu no Mori e+ (どうぶつの森 e+)
 **/

import type { FishOrBug, Game } from '$lib/types';
import { Creature, Location, Month, Shadow, TimeOfDay, Weather } from '$lib/types';

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
      // ...
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
  },
  // 16
  {
    name: 'Giant snakehead',
    icon: 'giant-snakehead.png',
    type: Creature.FISH,
    price: 6500,
    shadow: Shadow.VERY_LARGE,
    location: [Location.LAKE],
    weather: Weather.ANY,
    time: [
      { start: 9, end: 16 } // 9 AM to 4 PM
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Giant_snakehead#In_Animal_Crossing'
  },
  // 17
  {
    name: 'Eel',
    icon: 'eel.png',
    type: Creature.FISH,
    price: 2000,
    shadow: Shadow.MEDIUM,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [{ start: 16, end: 9 }], // 4 PM to 9 AM
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Eel#In_Animal_Crossing'
  },
  // 18
  {
    name: 'Freshwater goby',
    icon: 'freshwater-goby.png',
    type: Creature.FISH,
    price: 300,
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
    wikiPage: 'Freshwater_goby#In_Animal_Crossing'
  },
  // 19
  {
    name: 'Pond smelt',
    icon: 'pond-smelt.png',
    type: Creature.FISH,
    price: 300,
    shadow: Shadow.TINY,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      // ...
      december: Month.ALL
    },
    wikiPage: 'Pond_smelt#In_Animal_Crossing'
  },
  // 20
  {
    name: 'Sweetfish',
    icon: 'sweetfish.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Sweetfish#In_Animal_Crossing'
  },
  // 21
  {
    name: 'Cherry salmon',
    icon: 'cherry-salmon.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      { start: 4, end: 9 }, // 4 AM to 9 AM
      { start: 16, end: 21 } // 4 PM to 9 PM
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      // ...
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Cherry_salmon#In_Animal_Crossing'
  },
  // 22
  {
    name: 'Rainbow trout',
    icon: 'rainbow-trout.png',
    type: Creature.FISH,
    price: 650,
    shadow: Shadow.MEDIUM,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      { start: 4, end: 9 }, // 4 AM to 9 AM
      { start: 16, end: 21 } // 4 PM to 9 PM
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      // ...
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Rainbow_trout#In_Animal_Crossing'
  },
  // 23
  {
    name: 'Large char',
    altName: ['Char'],
    icon: 'large-char.png',
    type: Creature.FISH,
    price: 10000,
    shadow: Shadow.LARGE,
    location: [Location.WATERFALL],
    weather: Weather.ANY,
    time: [
      { start: 4, end: 9 }, // 4 AM to 9 AM
      { start: 16, end: 21 } // 4 PM to 9 PM
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      // ...
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Large_char#In_Animal_Crossing'
  },
  // 24
  {
    name: 'Stringfish',
    icon: 'stringfish.png',
    type: Creature.FISH,
    price: 15000,
    shadow: Shadow.VERY_LARGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      { start: 16, end: 9 } // 4 PM to 9 AM
    ],
    months: {
      january: Month.ALL,
      february: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Stringfish#In_Animal_Crossing'
  },
  // 25
  {
    name: 'Salmon',
    icon: 'salmon.png',
    type: Creature.FISH,
    price: 650,
    shadow: Shadow.LARGE,
    location: [Location.RIVER_MOUTH],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      september: Month.ALL
    },
    wikiPage: 'Salmon#In_Animal_Crossing'
  },
  // 26
  {
    name: 'Goldfish',
    icon: 'goldfish.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.TINY,
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
    wikiPage: 'Goldfish#In_Animal_Crossing'
  },
  // 27
  {
    name: 'Popeyed goldfish',
    icon: 'popeyed-goldfish.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.TINY,
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
    wikiPage: 'Popeyed_goldfish#In_Animal_Crossing'
  },
  // 28
  {
    name: 'Guppy',
    icon: 'guppy.png',
    type: Creature.FISH,
    price: 1300,
    shadow: Shadow.TINY,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      {
        start: 9, // 9 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Guppy#In_Animal_Crossing'
  },
  // 29
  {
    name: 'Angelfish',
    icon: 'angelfish.png',
    type: Creature.FISH,
    price: 3000,
    shadow: Shadow.SMALL,
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
    wikiPage: 'Angelfish#In_Animal_Crossing'
  },
  // 30
  {
    name: 'Piranha',
    icon: 'piranha.png',
    type: Creature.FISH,
    price: 6500,
    shadow: Shadow.SMALL,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      { start: 21, end: 4 }, // 9 PM to 4 AM
      { start: 9, end: 16 } // 9 AM to 4 PM
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Piranha#In_Animal_Crossing'
  },
  // 31
  {
    name: 'Arowana',
    icon: 'arowana.png',
    type: Creature.FISH,
    price: 10000,
    shadow: Shadow.MEDIUM,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [
      { start: 4, end: 9 }, // 4 AM to 9 AM
      { start: 16, end: 21 } // 4 PM to 9 PM
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Arowana#In_Animal_Crossing'
  },
  // 32
  {
    name: 'Arapaima',
    icon: 'arapaima.png',
    type: Creature.FISH,
    price: 10000,
    shadow: Shadow.HUGE,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: [{ start: 16, end: 9 }], // 4 PM to 9 AM
    months: {
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Arapaima#In_Animal_Crossing'
  },
  // 33
  {
    name: 'Crawfish',
    icon: 'crawfish.png',
    type: Creature.FISH,
    price: 250,
    shadow: Shadow.SMALL,
    location: [Location.POND],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.FIRST_HALF
    },
    wikiPage: 'Crawfish#In_Animal_Crossing'
  },
  // 34
  {
    name: 'Frog',
    icon: 'frog.png',
    type: Creature.FISH,
    price: 250,
    shadow: Shadow.TINY,
    location: [Location.POND],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Frog#In_Animal_Crossing'
  },
  // 35
  {
    name: 'Killifish',
    icon: 'killifish.png',
    type: Creature.FISH,
    price: 300,
    shadow: Shadow.TINY,
    location: [Location.RIVER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Killifish#In_Animal_Crossing'
  },
  // 36
  {
    name: 'Jellyfish',
    altName: ['Moon jellyfish'],
    icon: 'jellyfish.png',
    type: Creature.FISH,
    price: 100,
    shadow: Shadow.MEDIUM,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      august: Month.SECOND_HALF
    },
    wikiPage: 'Jellyfish#In_Animal_Crossing'
  },
  // 37
  {
    name: 'Sea bass',
    icon: 'sea-bass.png',
    type: Creature.FISH,
    price: 120,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
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
      august: Month.FIRST_HALF,
      // ...
      september: Month.SECOND_HALF,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Sea_bass#In_Animal_Crossing'
  },
  // 38
  {
    name: 'Horse mackerel',
    icon: 'horse-mackerel.png',
    type: Creature.FISH,
    price: 120,
    shadow: Shadow.MEDIUM,
    location: [Location.SEA],
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
      august: Month.FIRST_HALF,
      // ...
      september: Month.SECOND_HALF,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Horse_mackerel#In_Doubutsu_no_Mori_e.2B'
  },
  // 39
  {
    name: 'Red snapper',
    icon: 'red-snapper.png',
    type: Creature.FISH,
    price: 3000,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
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
      august: Month.FIRST_HALF,
      september: Month.SECOND_HALF,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Red_snapper#In_Animal_Crossing'
  },
  // 40
  {
    name: 'Barred knifejaw',
    icon: 'barred-knifejaw.png',
    type: Creature.FISH,
    price: 5000,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Barred_knifejaw#In_Animal_Crossing'
  },
  // 41
  {
    name: 'Balloonfish',
    altName: ['Puffer fish'],
    icon: 'balloonfish.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.MEDIUM,
    location: [Location.ANIMAL_ISLAND],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Puffer_fish#In_Doubutsu_no_Mori_e.2B'
  },
  // 42
  {
    name: 'Dab',
    icon: 'dab.png',
    type: Creature.FISH,
    price: 800,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      // ...
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Dab#In_Doubutsu_no_Mori_e.2B'
  },
  // 43
  {
    name: 'Olive flounder',
    icon: 'olive-flounder.png',
    type: Creature.FISH,
    price: 200,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
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
    wikiPage: 'Olive_flounder#In_Animal_Crossing'
  },
  // 44
  {
    name: 'Squid',
    icon: 'squid.png',
    type: Creature.FISH,
    price: 400,
    shadow: Shadow.MEDIUM,
    location: [Location.SEA],
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
      // ...
      december: Month.ALL
    },
    wikiPage: 'Squid#In_Doubutsu_no_Mori_e.2B'
  },
  // 45
  {
    name: 'Octopus',
    icon: 'octopus.png',
    type: Creature.FISH,
    price: 450,
    shadow: Shadow.LARGE,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      // ...
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      // ...
      september: Month.SECOND_HALF,
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Octopus_(creature)#In_Doubutsu_no_Mori_e.2B'
  },
  // 46
  {
    name: 'Seahorse',
    altName: ['Sea horse'],
    icon: 'seahorse.png',
    type: Creature.FISH,
    price: 1500,
    shadow: Shadow.TINY,
    location: [Location.SEA],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Sea_horse#In_Doubutsu_no_Mori_e.2B'
  },
  // 47
  {
    name: 'Blue marlin',
    icon: 'blue-marlin.png',
    type: Creature.FISH,
    price: 10000,
    shadow: Shadow.HUGE,
    location: [Location.ANIMAL_ISLAND],
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
    wikiPage: 'Blue_marlin#In_Doubutsu_no_Mori_e.2B'
  },
  // 48
  {
    name: 'Coelacanth',
    icon: 'coelacanth.png',
    type: Creature.FISH,
    price: 15000,
    shadow: Shadow.VERY_LARGE,
    location: [Location.SEA],
    weather: Weather.RAINING,
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
    wikiPage: 'Coelacanth#In_Animal_Crossing'
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
    altName: ["Queen Alexandra's birdwing", 'Birdwing', 'Birdwing butterfly'],
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
  },
  // 6
  {
    name: 'Mantis',
    icon: 'mantis.png',
    type: Creature.BUG,
    price: 430,
    location: [Location.ON_FLOWERS],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL
    },
    wikiPage: 'Mantis#In_Animal_Crossing'
  },
  // 7
  {
    name: 'Long locust',
    icon: 'long-locust.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.IN_BUSHES],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Long_locust#In_Animal_Crossing'
  },
  // 8
  {
    name: 'Migratory locust',
    icon: 'migratory-locust.png',
    type: Creature.BUG,
    price: 1350,
    location: [Location.ON_THE_GROUND],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Migratory_locust#In_Animal_Crossing'
  },
  // 9
  {
    name: 'Red dragonfly',
    icon: 'red-dragonfly.png',
    type: Creature.BUG,
    price: 80,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 19 // 7 PM
      }
    ],
    months: {
      september: Month.ALL,
      october: Month.ALL
    },
    wikiPage: 'Red_dragonfly#In_Animal_Crossing'
  },
  // 10
  {
    name: 'Common dragonfly',
    altName: ['Greater blue skimmer', 'White-tailed skimmer'],
    icon: 'common-dragonfly.png',
    type: Creature.BUG,
    price: 130,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL
    },
    wikiPage: 'Greater_blue_skimmer#In_Animal_Crossing'
  },
  // 11
  {
    name: 'Darner dragonfly',
    icon: 'darner-dragonfly.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
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
    wikiPage: 'Darner_dragonfly#In_Animal_Crossing'
  },
  // 12
  {
    name: 'Banded dragonfly',
    icon: 'banded-dragonfly.png',
    type: Creature.BUG,
    price: 450,
    location: [Location.FLYING],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Banded_dragonfly#In_Animal_Crossing'
  },
  // 13
  {
    name: 'Brown cicada',
    icon: 'brown-cicada.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Brown_cicada#In_Animal_Crossing'
  },
  // 14
  {
    name: 'Robust cicada',
    icon: 'robust-cicada.png',
    type: Creature.BUG,
    price: 300,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 8, // 8 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Robust_cicada#In_Animal_Crossing'
  },
  // 15
  {
    name: 'Walker cicada',
    icon: 'walker-cicada.png',
    type: Creature.BUG,
    price: 400,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 8, // 8 AM
        end: 16 // 4 PM
      }
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Walker_cicada#In_Animal_Crossing'
  },
  // 16
  {
    name: 'Evening cicada',
    icon: 'evening-cicada.png',
    type: Creature.BUG,
    price: 850,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      {
        start: 4, // 4 AM,
        end: 8 // 8 AM
      },
      {
        start: 16, // 4 PM
        end: 19 // 7 PM
      }
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Evening_cicada#In_Animal_Crossing'
  },
  // 17
  {
    name: 'Cricket',
    icon: 'cricket.png',
    type: Creature.BUG,
    price: 130,
    location: [Location.IN_BUSHES],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 17, // 5 PM
        end: 8 // 8 AM
      }
    ],
    months: {
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Cricket#In_Animal_Crossing'
  },
  // 18
  {
    name: 'Grasshopper',
    icon: 'grasshopper.png',
    type: Creature.BUG,
    price: 130,
    location: [Location.IN_BUSHES],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Grasshopper#In_Animal_Crossing'
  },
  // 19
  {
    name: 'Pine cricket',
    icon: 'pine-cricket.png',
    type: Creature.BUG,
    price: 100,
    location: [Location.IN_BUSHES],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 17, // 5 PM
        end: 8 // 8 AM
      }
    ],
    months: {
      september: Month.ALL,
      october: Month.ALL
    },
    wikiPage: 'Pine_cricket#In_Animal_Crossing'
  },
  // 20
  {
    name: 'Bell cricket',
    icon: 'bell-cricket.png',
    type: Creature.BUG,
    price: 430,
    location: [Location.IN_BUSHES],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 17, // 5 PM
        end: 8 // 8 AM
      }
    ],
    months: {
      september: Month.ALL,
      october: Month.ALL
    },
    wikiPage: 'Bell_cricket#In_Animal_Crossing'
  },
  // 21
  {
    name: 'Ladybug',
    icon: 'ladybug.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.ON_FLOWERS],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      // ...
      october: Month.ALL
    },
    wikiPage: 'Ladybug_(Animal_Crossing)#In_Animal_Crossing'
  },
  // 22
  {
    name: 'Spotted ladybug',
    altName: ['Ladybug'],
    icon: 'spotted-ladybug.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.ON_FLOWERS],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 8, // 8 AM
        end: 17 // 5 PM
      }
    ],
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      // ...
      october: Month.ALL
    },
    wikiPage: 'Ladybug#In_Animal_Crossing'
  },
  // 23
  {
    name: 'Drone beetle',
    icon: 'drone-beetle.png',
    type: Creature.BUG,
    price: 80,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Drone_beetle#In_Animal_Crossing'
  },
  // 24
  {
    name: 'Firefly',
    icon: 'firefly.png',
    type: Creature.BUG,
    price: 250,
    location: [Location.FLYING_NEAR_WATER],
    weather: Weather.NOT_RAINING,
    time: [
      {
        start: 19, // 7 PM
        end: 4 // 4 AM
      }
    ],
    months: {
      june: Month.ALL
    },
    wikiPage: 'Firefly#In_Animal_Crossing'
  },
  // 25
  {
    name: 'Longhorn beetle',
    altName: ['Citrus long-horned beetle'],
    icon: 'longhorn-beetle.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.ON_TREES],
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
    wikiPage: 'Citrus_long-horned_beetle#In_Animal_Crossing'
  },
  // 26
  {
    name: 'Jewel beetle',
    icon: 'jewel-beetle.png',
    type: Creature.BUG,
    price: 3000,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 8, end: 16 } // 8 AM – 4 PM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Jewel_beetle#In_Animal_Crossing'
  },
  // 27
  {
    name: 'Dynastid beetle',
    icon: 'dynastid-beetle.png',
    type: Creature.BUG,
    price: 1350,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 19, end: 8 } // 7 PM – 8 AM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Horned_dynastid#In_Animal_Crossing'
  },
  // 28
  {
    name: 'Hercules beetle',
    altName: ['Horned hercules'],
    icon: 'hercules-beetle.png',
    type: Creature.BUG,
    price: 11250,
    location: [Location.ON_NON_PALM_TREES],
    weather: Weather.ANY,
    time: [
      { start: 23, end: 8 } // 11 PM – 8 AM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Horned_hercules#In_Doubutsu_no_Mori_e.2B'
  },
  // 29
  {
    name: 'Flat stag beetle',
    icon: 'flat-stag-beetle.png',
    type: Creature.BUG,
    price: 2000,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 19, end: 8 } // 7 PM – 8 AM
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Stag_beetle#In_Animal_Crossing'
  },
  // 30
  {
    name: 'Saw stag beetle',
    altName: ['Saw stag'],
    icon: 'saw-stag-beetle.png',
    type: Creature.BUG,
    price: 2000,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 19, end: 8 } // 7 PM – 8 AM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Saw_stag#In_Animal_Crossing'
  },
  // 31
  {
    name: 'Mountain beetle',
    altName: ['Miyama stag'],
    icon: 'mountain-beetle.png',
    type: Creature.BUG,
    price: 2000,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 19, end: 8 } // 7 PM – 8 AM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Miyama_stag#In_Animal_Crossing'
  },
  // 32
  {
    name: 'Giant beetle',
    altName: ['Giant stag'],
    icon: 'giant-beetle.png',
    type: Creature.BUG,
    price: 10000,
    location: [Location.ON_TREES],
    weather: Weather.ANY,
    time: [
      { start: 23, end: 8 } // 11 PM – 8 AM
    ],
    months: {
      july: Month.ALL,
      august: Month.ALL
    },
    wikiPage: 'Giant_stag#In_Animal_Crossing'
  },
  // 33
  {
    name: 'Mole cricket',
    icon: 'mole-cricket.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.UNDERGROUND],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      // ...
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Mole_cricket#In_Animal_Crossing'
  },
  // 34
  {
    name: 'Snail',
    icon: 'snail.png',
    type: Creature.BUG,
    price: 250,
    location: [Location.ON_FLOWERS],
    weather: Weather.RAINING,
    time: TimeOfDay.ALL_DAY,
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Snail#In_Animal_Crossing'
  },
  // 35
  {
    name: 'Pill bug',
    icon: 'pill-bug.png',
    type: Creature.BUG,
    price: 250,
    location: [Location.UNDER_ROCKS],
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
    wikiPage: 'Pill_bug#In_Animal_Crossing'
  },
  // 36
  {
    name: 'Spider',
    icon: 'spider.png',
    type: Creature.BUG,
    price: 300,
    location: [Location.IN_TREES],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Spider#In_Animal_Crossing'
  },
  // 37
  {
    name: 'Bagworm',
    icon: 'bagworm.png',
    type: Creature.BUG,
    price: 250,
    location: [Location.IN_TREES],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      january: Month.ALL,
      february: Month.ALL,
      march: Month.ALL,
      // ...
      october: Month.ALL,
      november: Month.ALL,
      december: Month.ALL
    },
    wikiPage: 'Bagworm#In_Animal_Crossing'
  },
  // 38
  {
    name: 'Flea',
    icon: 'flea.png',
    type: Creature.BUG,
    price: 70,
    location: [Location.ON_VILLAGERS],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Flea#In_Doubutsu_no_Mori_e.2B'
  },
  // 39
  {
    name: 'Mosquito',
    icon: 'mosquito.png',
    type: Creature.BUG,
    price: 130,
    location: [Location.FLYING],
    weather: Weather.ANY,
    time: [{ start: 17, end: 23 }], // 5 PM – 11 PM
    months: {
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Mosquito#In_Animal_Crossing'
  },
  // 40
  {
    name: 'Bee',
    altName: ['Wasp'],
    icon: 'bee.png',
    type: Creature.BUG,
    price: 4500,
    location: [Location.IN_TREES],
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
    wikiPage: 'Wasp#In_Animal_Crossing'
  },
  // 41
  {
    name: 'Pond skater',
    altName: ['Pondskater'],
    icon: 'pond-skater.png',
    type: Creature.BUG,
    price: 130,
    location: [Location.ON_THE_LAKE, Location.ON_PONDS],
    weather: Weather.ANY,
    time: [{ start: 8, end: 19 }], // 8 AM – 7 PM
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Pondskater#In_Animal_Crossing'
  },
  // 42
  {
    name: 'Diving beetle',
    icon: 'diving-beetle.png',
    type: Creature.BUG,
    price: 250,
    location: [Location.ON_FRESHWATER],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Diving_beetle#In_Doubutsu_no_Mori_e.2B'
  },
  // 43
  {
    name: 'Crab',
    icon: 'crab.png',
    type: Creature.BUG,
    price: 150,
    location: [Location.ON_THE_BEACH],
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
    wikiPage: 'Crab#In_Doubutsu_no_Mori_e.2B'
  },
  // 44
  {
    name: 'Hermit crab',
    icon: 'hermit-crab.png',
    type: Creature.BUG,
    price: 200,
    location: [Location.ON_THE_BEACH],
    weather: Weather.ANY,
    time: TimeOfDay.ALL_DAY,
    months: {
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
    wikiPage: 'Hermit_crab#In_Doubutsu_no_Mori_e.2B'
  },
  // 45
  {
    name: 'Coconut crab',
    icon: 'coconut-crab.png',
    type: Creature.BUG,
    price: 300,
    location: [Location.ON_FRUITLESS_PALM_TREES_NOT_ON_ANIMAL_ISLAND],
    weather: Weather.ANY,
    time: [
      {
        start: 19, // 7 PM
        end: 8 // 8 AM
      }
    ],
    months: {
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL
    },
    wikiPage: 'Coconut_crab#In_Doubutsu_no_Mori_e.2B'
  },
  // 46
  {
    name: 'Ant',
    icon: 'ant.png',
    type: Creature.BUG,
    price: 80,
    location: [Location.ON_CANDY, Location.ON_SPOILED_TURNIPS],
    weather: Weather.NOT_RAINING,
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
    wikiPage: 'Ant#In_Animal_Crossing'
  },
  // 47
  {
    name: 'Dung beetle',
    icon: 'dung-beetle.png',
    type: Creature.BUG,
    price: 400,
    location: [Location.PUSHING_BALLS],
    weather: Weather.ANY,
    time: [
      {
        start: 19, // 7 PM
        end: 8 // 8 AM
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
    wikiPage: 'Dung_beetle#In_Doubutsu_no_Mori_e.2B'
  },
  // 48
  {
    name: 'Cockroach',
    icon: 'cockroach.png',
    type: Creature.BUG,
    price: 5,
    location: [Location.ON_TREES, Location.ON_FLOWERS, Location.ON_SPOILED_TURNIPS],
    weather: Weather.OTHER, // dependent on the location
    time: TimeOfDay.ALL_DAY,
    months: {
      march: Month.ALL,
      april: Month.ALL,
      may: Month.ALL,
      june: Month.ALL,
      july: Month.ALL,
      august: Month.ALL,
      september: Month.ALL,
      october: Month.ALL,
      november: Month.ALL
    },
    wikiPage: 'Cockroach#In_Animal_Crossing'
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
