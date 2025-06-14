<script lang="ts">
  import BugTable from '$lib/components/BugTable.svelte';
  import FishTable from '$lib/components/FishTable.svelte';
  import { DoubutsuNoMoriEPlus } from '$lib/data/doubutsu-no-mori-eplus';
  import { wikiUrl } from '$lib/data/wiki';
  import type { Filters } from '$lib/types/filters';
  import { Weather } from '$lib/types/shared';
  import { dataLoaded, loadSaveData } from '$lib/utils/save-data.svelte';
  import { renderWeatherFilterOption } from '$lib/utils/utils';

  import { onMount } from 'svelte';

  let notCaught = $state(false);
  let notDonated = $state(false);
  let weather = $state<Weather>(Weather.ANY);

  let filters = $derived<Filters>({
    notCaught,
    notDonated,
    weather
  });

  const resetFilters = () => {
    notCaught = false;
    notDonated = false;
    weather = Weather.ANY;
  };

  onMount(() => {
    loadSaveData();
  });
</script>

{#if dataLoaded.loaded}
  <h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">Filters</h2>

  <div class="filters flex items-center gap-6 px-4 py-4">
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={notCaught}
        class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
      />
      <span class="dark:text-white">Not caught?</span>
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={notDonated}
        class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
      />
      <span class="dark:text-white">Not donated?</span>
    </label>

    <div class="flex items-center gap-2">
      <label for="weather" class="dark:text-white">Weather:</label>
      <select
        id="weather"
        bind:value={weather}
        class="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-500"
      >
        {#each Object.values(Weather).filter((weather) => weather !== Weather.OTHER) as weather}
          <option value={weather}>
            {renderWeatherFilterOption(weather)}
          </option>
        {/each}
      </select>
    </div>

    <button
      onclick={resetFilters}
      class="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
    >
      Reset filters
    </button>
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

<style lang="scss">
  :global {
    thead {
      position: sticky;
      top: 0;
      z-index: 1000;

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
