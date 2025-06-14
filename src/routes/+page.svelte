<script lang="ts">
  import { BugTable, FilterPanel, FishTable } from '$lib/components';

  import { DoubutsuNoMoriEPlus, wikiUrl } from '$lib/data';
  import type { Filters } from '$lib/types';
  import { Weather } from '$lib/types';
  import { dataLoaded, loadSaveData } from '$lib/utils';

  import { onMount } from 'svelte';

  let filters = $state<Filters>({
    notCaught: false,
    notDonated: false,
    weather: Weather.ANY
  });

  onMount(() => {
    loadSaveData();
  });
</script>

{#if dataLoaded.loaded}
  <FilterPanel bind:filters />

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

<style lang="scss">
  :global {
    thead {
      position: sticky;
      top: 0;
      z-index: 49; // 1 less than the Flowbit Drawer component

      .num {
        width: 40px;
      }

      .caught {
        width: 80px;
      }

      .donated {
        width: 88px;
      }

      .icon {
        width: 56px;
        text-align: center;
      }

      .name {
        width: 240px;
      }

      .sell-price {
        width: 125px;
      }

      .time {
        width: 120px;
      }

      .months {
        width: 370px;
      }
    }
  }
</style>
