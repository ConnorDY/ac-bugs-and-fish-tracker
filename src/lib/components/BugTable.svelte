<script lang="ts">
  import type { Filters, FishOrBugWithNum, Game } from '$lib/types';
  import { getCaughtFishAndBugs, getDonatedFishAndBugs, filterFishOrBug } from '$lib/utils';

  import FishOrBugRow from './FishOrBugRow.svelte';

  interface Props {
    game: Game;
    filters: Filters;
  }
  let { game, filters }: Props = $props();

  // add a number to each bug
  const bugsWithNum = $state<FishOrBugWithNum[]>(
    game.bugs.map((bug, index) => ({
      ...bug,
      num: index + 1
    }))
  );
  let filteredBugs = $state([...bugsWithNum]);

  $effect(() => {
    const caughtFishAndBugs = getCaughtFishAndBugs(game);
    const donatedFishAndBugs = getDonatedFishAndBugs(game);

    filteredBugs = [
      ...bugsWithNum.filter((bug) =>
        filterFishOrBug(bug, filters, caughtFishAndBugs, donatedFishAndBugs)
      )
    ];
  });
</script>

<table class="dark:test-gray-400 w-full text-left text-sm text-gray-300 rtl:text-right">
  <thead class="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-300">
    <tr>
      <th class="num px-3 py-3">#</th>
      <th class="caught px-3 py-3">Caught?</th>
      <th class="donated px-3 py-3">Donated?</th>
      <th class="icon px-3 py-3">Icon</th>
      <th class="name px-3 py-3">Name</th>
      <th class="sell-price px-3 py-3">Sell price</th>
      <th class="px-3 py-3">Location</th>
      <th class="px-3 py-3">Weather</th>
      <th class="time px-3 py-3">Time</th>
      <th class="months px-3 py-3">Months</th>
    </tr>
  </thead>

  <tbody>
    {#each filteredBugs as bug (bug.name)}
      <FishOrBugRow {game} data={bug} />
    {/each}
  </tbody>
</table>
