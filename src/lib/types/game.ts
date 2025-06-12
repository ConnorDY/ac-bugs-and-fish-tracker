import type { FishOrBug } from './fish-or-bug';

export interface Game {
  name: string;
  path: string;
  releaseDate: string;
  languages: string[];
  fish: FishOrBug[];
  bugs: FishOrBug[];
  fishWikiPage: string;
  bugsWikiPage: string;
}
