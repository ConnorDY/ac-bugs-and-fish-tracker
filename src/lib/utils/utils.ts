import type { Time, TimeRange } from '$lib/types/shared';
import { Location, Weather } from '$lib/types/shared';

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function renderKebabCaseValue(str: string, capitalizeEach = false): string {
  const words = str.split('-');

  const renderedWords = words
    .map((word, index) => (capitalizeEach || index === 0 ? capitalizeFirstLetter(word) : word))
    .join(' ');

  return renderedWords.replaceAll('_', '-'); // Replace underscores with hyphens
}

export function renderLocation(location: Location): string {
  switch (location) {
    case Location.ANIMAL_ISLAND:
      return renderKebabCaseValue(location, true);

    case Location.ON_FRUITLESS_PALM_TREES_NOT_ON_ANIMAL_ISLAND:
      return 'On fruitless palm trees (not on Animal Island)';

    case Location.RIVER_MOUTH:
      return 'River (mouth)';

    default:
      return renderKebabCaseValue(location);
  }
}

export function convert24HourTo12Hour(hour: number): string {
  const isPM = hour >= 12;
  const adjustedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
  return `${adjustedHour} ${isPM ? 'PM' : 'AM'}`;
}

export function renderWeather(weather: Weather, fishOrBugName: string): string {
  switch (weather) {
    case Weather.ANY:
      return 'Any';

    case Weather.RAINING:
      return 'Raining';

    case Weather.NOT_RAINING:
      return 'Any except rain';

    case Weather.OTHER:
      if (fishOrBugName === 'Cockroach') {
        return (
          '<div>On trees: Any weather</div>' +
          '<div>On flowers/spoiled turnips: Any except rain</div>'
        );
      }

      throw new Error(`Weather 'Other' is not supported for ${fishOrBugName}.`);

    default:
      throw new Error(`Unknown weather type: ${weather}`);
  }
}

export function renderWeatherFilterOption(weather: Weather): string {
  switch (weather) {
    case Weather.ANY:
      return 'Any';

    case Weather.RAINING:
      return 'Raining';

    case Weather.NOT_RAINING:
      return 'Not raining';

    case Weather.OTHER:
      return 'Other';

    default:
      throw new Error(`Unknown weather type: ${weather}`);
  }
}
