import type { Weather } from './shared';

export interface Filters {
  notCaught: boolean;
  notDonated: boolean;
  weather: Weather;
}
