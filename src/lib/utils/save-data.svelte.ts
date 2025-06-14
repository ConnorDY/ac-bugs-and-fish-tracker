import type { FishOrBug, FishOrBugSaveData, Game, SaveData } from '$lib/types';

const SAVE_DATA_KEY = 'saved-data';

export const saveData = $state<SaveData>({ games: {} });

export const dataLoaded = $state({
  loaded: false
});

/** Loads save data from local storage */
export function loadSaveData(): void {
  const saveDataJsonString = localStorage.getItem(SAVE_DATA_KEY);
  Object.assign(saveData, saveDataJsonString ? JSON.parse(saveDataJsonString) : { games: {} });

  console.log('Loaded save data from local storage.', $state.snapshot(saveData));

  dataLoaded.loaded = true;
}

/** Saves save data to local storage */
export function saveSaveData(): void {
  localStorage.setItem(SAVE_DATA_KEY, JSON.stringify(saveData));

  console.log('Saved save data to local storage.', $state.snapshot(saveData));
}

/** Gets the current save data for a fish or bug */
export function getFishOrBugData(game: Game, fishOrBug: FishOrBug): FishOrBugSaveData {
  if (!saveData.games[game.name]) {
    return {};
  }

  return saveData.games[game.name][fishOrBug.name] || {};
}

/** Updates the save data for a fish or bug */
export function updateFishOrBugData(
  game: Game,
  fishOrBug: FishOrBug,
  newData: FishOrBugSaveData
): void {
  if (!saveData.games[game.name]) {
    saveData.games[game.name] = {};
  }

  // get the current data for the fish or bug
  const currentFishOrBugData = saveData.games[game.name][fishOrBug.name];

  // update the data
  saveData.games[game.name][fishOrBug.name] = {
    ...currentFishOrBugData,
    ...newData
  };

  // update local storage
  saveSaveData();
}

/** Gets a list of all caught fish and bugs for a game */
export function getCaughtFishAndBugs(game: Game): string[] {
  const fishOrBugData = saveData.games[game.name] || {};

  return Object.entries(fishOrBugData)
    .filter(([, data]) => data.caught)
    .map(([name]) => name);
}

/** Gets a list of all donated fish and bugs for a game */
export function getDonatedFishAndBugs(game: Game): string[] {
  const fishOrBugData = saveData.games[game.name] || {};

  return Object.entries(fishOrBugData)
    .filter(([, data]) => data.donated)
    .map(([name]) => name);
}
