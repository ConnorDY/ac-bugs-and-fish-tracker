<script>
  import BugTable from '$lib/components/BugTable.svelte';
  import FishTable from '$lib/components/FishTable.svelte';
  import { DoubutsuNoMoriEPlus } from '$lib/data/doubutsu-no-mori-eplus';
  import { wikiUrl } from '$lib/data/wiki';
  import { dataLoaded, loadSaveData } from '$lib/utils/save-data.svelte';

  import { onMount } from 'svelte';

  let notCaught = $state(false);

  let filters = $derived({
    notCaught
  });

  onMount(() => {
    loadSaveData();
  });
</script>

{#if dataLoaded.loaded}
  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">Filters</h2>

  <div class="px-4 py-4">
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={notCaught}
        class="h-5 w-5 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
      />
      <span class="dark:text-white">Not caught?</span>
    </label>
  </div>

  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
    <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.fishWikiPage}`}>Fish</a>
  </h2>

  <FishTable game={DoubutsuNoMoriEPlus} {filters} />

  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
    <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.bugsWikiPage}`}>Bugs</a>
  </h2>

  <BugTable game={DoubutsuNoMoriEPlus} {filters} />
{:else}
  <p class="px-4 py-4 text-2xl font-extrabold dark:text-white">Loading data...</p>
{/if}
