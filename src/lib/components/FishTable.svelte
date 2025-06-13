<script lang="ts">
  import type { Game } from '$lib/types/game';
  import FishOrBugRow from './FishOrBugRow.svelte';

  interface Props {
    game: Game;
  }
  let { game }: Props = $props();
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
    {#each game.fish as fish, index}
      <FishOrBugRow {game} num={index + 1} data={fish} />
    {/each}
  </tbody>
</table>
