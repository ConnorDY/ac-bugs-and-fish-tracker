<script lang="ts">
  import type { Filters } from '$lib/types/filters';
  import type { FishOrBugWithNum } from '$lib/types/fish-or-bug';
  import type { Game } from '$lib/types/game';
  import { getCaughtFishAndBugs } from '$lib/utils/save-data.svelte';
  import FishOrBugRow from './FishOrBugRow.svelte';

  interface Props {
    game: Game;
    filters: Filters;
  }
  let { game, filters }: Props = $props();

  const bugsWithNum = $state<FishOrBugWithNum[]>(
    game.bugs.map((bug, index) => ({
      ...bug,
      num: index + 1
    }))
  );
  let filteredBugs = $state([...bugsWithNum]);

  $effect(() => {
    if (filters.notCaught) {
      const caughtFishAndBugs = getCaughtFishAndBugs(game);
      filteredBugs = [...bugsWithNum.filter((bug) => !caughtFishAndBugs.includes(bug.name))];
    } else {
      filteredBugs = [...bugsWithNum];
    }
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
      <th class="px-3 py-3">Location</th>
      <th class="px-3 py-3">Weather</th>
      <th class="px-3 py-3">Time</th>
      <th class="px-3 py-3">Months</th>
    </tr>
  </thead>

  <tbody>
    {#each filteredBugs as bug (bug.name)}
      <FishOrBugRow {game} data={bug} />
    {/each}
  </tbody>
</table>
