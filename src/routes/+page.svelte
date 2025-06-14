<script lang="ts">
  import { BugTable, FilterPanel, FishTable } from '$lib/components';

  import { DoubutsuNoMoriEPlus, wikiUrl } from '$lib/data';
  import type { Filters } from '$lib/types';
  import { dataLoaded, defaultFilters, loadSaveData } from '$lib/utils';

  import { onMount } from 'svelte';
  import { ArrowDownOutline, ArrowUpOutline } from 'flowbite-svelte-icons';

  let filters = $state<Filters>({ ...defaultFilters });

  onMount(() => {
    loadSaveData();
  });
</script>

<svelte:head>
  <title>Doubutsu no Mori e+ Bugs and Fish Tracker</title>
</svelte:head>

{#if dataLoaded.loaded}
  <FilterPanel bind:filters />

  <div class="flex items-center gap-4">
    <h2 id="fish-table" class="px-4 py-4 text-4xl font-extrabold dark:text-white">
      <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.fishWikiPage}`} target="_blank">Fish</a>
    </h2>

    <a href="#bugs-table">
      <ArrowDownOutline size="xl" color="var(--color-teal-600)" aria-hidden={true} />
      <span class="sr-only">Jump to Bugs table</span>
    </a>
  </div>

  <FishTable game={DoubutsuNoMoriEPlus} {filters} />

  <div class="flex items-center gap-4">
    <h2 id="bugs-table" class="px-4 py-4 text-4xl font-extrabold dark:text-white">
      <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.bugsWikiPage}`} target="_blank">Bugs</a>
    </h2>

    <a href="#fish-table">
      <ArrowUpOutline size="xl" color="var(--color-teal-600)" aria-hidden={true} />
      <span class="sr-only">Jump to Fish table</span>
    </a>
  </div>

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
