<script lang="ts">
  import type { Filters } from '$lib/types/filters';
  import type { FishOrBugWithNum } from '$lib/types/fish-or-bug';
  import type { Game } from '$lib/types/game';
  import { getCaughtFishAndBugs, getDonatedFishAndBugs } from '$lib/utils/save-data.svelte';
  import FishOrBugRow from './FishOrBugRow.svelte';

  interface Props {
    game: Game;
    filters: Filters;
  }
  let { game, filters }: Props = $props();

  // add a number to each fish
  const fishWithNum = $state<FishOrBugWithNum[]>(
    game.fish.map((fish, index) => ({
      ...fish,
      num: index + 1
    }))
  );
  let filteredFish = $state([...fishWithNum]);

  $effect(() => {
    const caughtFishAndBugs = getCaughtFishAndBugs(game);
    const donatedFishAndBugs = getDonatedFishAndBugs(game);

    filteredFish = [
      ...fishWithNum.filter((fish) => {
        if (filters.notCaught && caughtFishAndBugs.includes(fish.name)) return false;
        if (filters.notDonated && donatedFishAndBugs.includes(fish.name)) return false;

        return true;
      })
    ];
  });
</script>

<table class="dark:test-gray-400 w-full text-left text-sm text-gray-400 rtl:text-right">
  <thead class="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th class="px-3 py-3">#</th>
      <th class="px-3 py-3">Caught?</th>
      <th class="px-3 py-3">Donated?</th>
      <th class="px-3 py-3">Name</th>
      <th class="px-3 py-3">Icon</th>
      <th class="px-3 py-3">Sell price</th>
      <th class="px-3 py-3">Shadow size</th>
      <th class="px-3 py-3">Location</th>
      <th class="px-3 py-3">Time</th>
      <th class="px-3 py-3">Months</th>
    </tr>
  </thead>

  <tbody>
    {#each filteredFish as fish (fish.name)}
      <FishOrBugRow {game} data={fish} />
    {/each}
  </tbody>
</table>
