<script>
  import BugTable from '$lib/components/BugTable.svelte';
  import FishTable from '$lib/components/FishTable.svelte';
  import { DoubutsuNoMoriEPlus } from '$lib/data/doubutsu-no-mori-eplus';
  import { wikiUrl } from '$lib/data/wiki';
  import { dataLoaded, loadSaveData } from '$lib/utils/save-data.svelte';

  import { onMount } from 'svelte';

  onMount(() => {
    loadSaveData();
  });
</script>

{#if dataLoaded.loaded}
  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
    <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.fishWikiPage}`}>Fish</a>
  </h2>

  <FishTable game={DoubutsuNoMoriEPlus} />

  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
    <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.bugsWikiPage}`}>Bugs</a>
  </h2>

  <BugTable game={DoubutsuNoMoriEPlus} />
{:else}
  <p class="px-4 py-4 text-2xl font-extrabold dark:text-white">Loading data...</p>
{/if}
