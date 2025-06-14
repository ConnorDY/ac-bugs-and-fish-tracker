import type { Filters, FishOrBug } from '$lib/types';
import { Weather } from '$lib/types';

export function filterFishOrBug(
  fishOrBug: FishOrBug,
  filters: Filters,
  caughtFishAndBugs: string[],
  donatedFishAndBugs: string[]
): boolean {
  if (filters.notCaught && caughtFishAndBugs.includes(fishOrBug.name)) return false;
  if (filters.notDonated && donatedFishAndBugs.includes(fishOrBug.name)) return false;

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
