import type { Weather } from './shared';

export enum MonthFilter {
  ANY = 'any',
  JANUARY = 'january',
  FEBRUARY = 'february',
  MARCH = 'march',
  APRIL = 'april',
  MAY = 'may',
  JUNE = 'june',
  JULY = 'july',
  AUGUST = 'august',
  SEPTEMBER = 'september',
  OCTOBER = 'october',
  NOVEMBER = 'november',
  DECEMBER = 'december'
}

export interface Filters {
  notCaught: boolean;
  notDonated: boolean;
  weather: Weather;
  month: MonthFilter;
  date?: Date;
  dateString: string;
}
