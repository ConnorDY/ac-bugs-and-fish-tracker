<script lang="ts">
  import { Button } from '$lib/components';
  import type { Filters } from '$lib/types/filters';
  import { Weather } from '$lib/types/shared';
  import { renderWeatherFilterOption } from '$lib/utils/utils';

  import { Drawer, CloseButton } from 'flowbite-svelte';
  import { FilterSolid } from 'flowbite-svelte-icons';

  const drawerId = 'filter-panel';
  const drawerLabelId = 'filter-panel-label';

  interface Props {
    filters?: Filters;
  }

  let {
    filters = $bindable({
      notCaught: false,
      notDonated: false,
      weather: Weather.ANY
    })
  }: Props = $props();

  let hidden = $state(true);

  const resetFilters = () => {
    filters = {
      notCaught: false,
      notDonated: false,
      weather: Weather.ANY
    };
  };
</script>

<Button onclick={() => (hidden = false)} class="filter-panel-button">
  <FilterSolid class="h-5 w-5" />
  <span class="sr-only">Filters</span>
</Button>

<Drawer
  id={drawerId}
  bind:hidden
  placement="bottom"
  aria-controls={drawerId}
  aria-labelledby={drawerLabelId}
  class="w-full"
>
  <div class="flex items-center justify-between">
    <h2
      id={drawerLabelId}
      class="mb-4 inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-300"
    >
      <FilterSolid class="me-2.5 h-5 w-5" />Filters
    </h2>
    <CloseButton onclick={() => (hidden = true)} class="mb-4 dark:text-white" />
  </div>

  <div class="filters flex items-center gap-6 px-4 py-4">
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={filters.notCaught}
        class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
      />
      <span class="dark:text-white">Not caught?</span>
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={filters.notDonated}
        class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
      />
      <span class="dark:text-white">Not donated?</span>
    </label>

    <div class="flex items-center gap-2">
      <label for="weather" class="dark:text-white">Weather:</label>
      <select
        id="weather"
        bind:value={filters.weather}
        class="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-500"
      >
        {#each Object.values(Weather).filter((weather) => weather !== Weather.OTHER) as weather}
          <option value={weather}>
            {renderWeatherFilterOption(weather)}
          </option>
        {/each}
      </select>
    </div>

    <Button onclick={resetFilters}>Reset filters</Button>
  </div>
</Drawer>

<style lang="scss">
  :global {
    .filter-panel-button {
      position: fixed;
      right: 8px;
      bottom: 8px;

      border-radius: 100%;
      padding: 12px;

      box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
    }
  }
</style>
