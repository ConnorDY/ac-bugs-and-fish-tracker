export interface FishOrBugSaveData {
  caught?: boolean;
  donated?: boolean;
}

export interface GameSaveData {
  [fishOrBug: string]: FishOrBugSaveData;
}

export interface SaveData {
  games: {
    [game: string]: GameSaveData;
  };
}
