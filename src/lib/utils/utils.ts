import type { Location, Time, TimeRange } from '$lib/types/shared';
import { Weather } from '$lib/types/shared';

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function renderKebabCaseValue(str: string, capitalizeEach = false): string {
  const words = str.split('-');

  const renderedWords = words
    .map((word, i) => (capitalizeEach || i === 0 ? capitalizeFirstLetter(word) : word))
    .join(' ');

  return renderedWords.replaceAll('_', '-'); // Replace underscores with hyphens
}

export function renderLocation(location: Location[] | string): string {
  if (typeof location === 'string') {
    return renderKebabCaseValue(location);
  }

  return (location as Location[]).map((loc) => renderKebabCaseValue(loc)).join(' ');
}

export function convert24HourTo12Hour(hour: number): string {
  const isPM = hour >= 12;
  const adjustedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
  return `${adjustedHour} ${isPM ? 'PM' : 'AM'}`;
}

export function renderTime(time: Time): string {
  if (typeof time === 'string') {
    return renderKebabCaseValue(time);
  }

  return (time as TimeRange[])
    .map((t) => `${convert24HourTo12Hour(t.start)} – ${convert24HourTo12Hour(t.end)}`)
    .join('; ');
}

export function renderWeather(weather: Weather): string {
  switch (weather) {
    case Weather.ANY:
      return '';

    case Weather.RAINING:
      return 'Rain only';

    case Weather.NOT_RAINING:
      return 'Any except rain';
  }
}
