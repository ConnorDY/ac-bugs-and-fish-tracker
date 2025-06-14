import type { Filters, FishOrBug, Months, TimeFilter, TimeRange } from '$lib/types';
import { Month, MonthFilter, TimeOfDay, Weather } from '$lib/types';

// use Object.freeze to prevent accidental modification of the default filters
export const defaultFilters: Filters = Object.freeze({
  notCaught: false,
  notDonated: false,
  weather: Weather.ANY,
  month: MonthFilter.ANY,
  date: undefined,
  dateString: '',
  time: TimeOfDay.ALL_DAY
});

export function filterByDate(fishOrBug: FishOrBug, date: Date): boolean {
  const dayOfMonth = date.getDate();

  const monthIndex = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1
  const month = Object.values(MonthFilter)[monthIndex];

  const fishOrBugMonthValue = Object.prototype.hasOwnProperty.call(fishOrBug.months, month)
    ? fishOrBug.months[month as keyof Months]
    : undefined;

  switch (fishOrBugMonthValue) {
    case Month.ALL:
      return true;

    case Month.FIRST_HALF:
      if (dayOfMonth <= 15) return true;
      return false;

    case Month.SECOND_HALF:
      if (dayOfMonth > 15) return true;
      return false;

    default:
      return false;
  }
}

export function filterByTime(fishOrBug: FishOrBug, timeFilter: TimeFilter): boolean {
  if (fishOrBug.time === TimeOfDay.ALL_DAY) return true;

  const hourFilter = timeFilter as number;

  for (const time of fishOrBug.time as TimeRange[]) {
    if (time.end > time.start) {
      if (hourFilter >= time.start && hourFilter <= time.end) {
        return true;
      }
    } else {
      if (hourFilter >= time.start || hourFilter <= time.end) {
        return true;
      }
    }
  }

  return false;
}

export function filterFishOrBug(
  fishOrBug: FishOrBug,
  filters: Filters,
  caughtFishAndBugs: string[],
  donatedFishAndBugs: string[]
): boolean {
  if (filters.notCaught && caughtFishAndBugs.includes(fishOrBug.name)) return false;
  if (filters.notDonated && donatedFishAndBugs.includes(fishOrBug.name)) return false;

  // date filter (overrides month filter)
  if (filters.date && !filterByDate(fishOrBug, filters.date)) return false;

  // month filter
  if (
    !filters.date && // if the date filter is set, we don't filter by month
    filters.month !== MonthFilter.ANY &&
    !Object.prototype.hasOwnProperty.call(fishOrBug.months, filters.month)
  ) {
    return false;
  }

  // time filter
  if (filters.time !== TimeOfDay.ALL_DAY && !filterByTime(fishOrBug, filters.time)) return false;

  if (
    filters.weather !== Weather.ANY && // if the filter is set to ANY, we don't filter by weather
    fishOrBug.weather !== Weather.ANY && // if the fish or bug's weather is ANY, we don't filter by weather
    fishOrBug.weather !== Weather.OTHER && // if the fish or bug's weather is OTHER, we don't filter by weather
    fishOrBug.weather !== filters.weather // otherwise, we try to match the fish or bug's weather with the filter
  ) {
    return false;
  }

  return true;
}
