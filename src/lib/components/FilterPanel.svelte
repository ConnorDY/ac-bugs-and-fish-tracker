<script lang="ts">
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';
  import DatePicker from './DatePicker.svelte';
  import Dropdown from './Dropdown.svelte';

  import type { Filters } from '$lib/types';
  import { MonthFilter, Weather } from '$lib/types';
  import { defaultFilters, renderKebabCaseValue, renderWeatherFilterOption } from '$lib/utils';

  import { Drawer, CloseButton } from 'flowbite-svelte';
  import { FilterSolid } from 'flowbite-svelte-icons';

  const drawerId = 'filter-panel';
  const drawerLabelId = 'filter-panel-label';

  interface Props {
    filters: Filters;
  }

  let { filters = $bindable({ ...defaultFilters }) }: Props = $props();

  let hidden = $state(true);

  const resetFilters = () => {
    filters = {
      ...defaultFilters
    };
  };
</script>

<Button onclick={() => (hidden = false)} class="filter-panel-button">
  <FilterSolid class="h-5 w-5" aria-hidden={true} />
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
  <div class="mb-2 flex items-center justify-between">
    <h2
      id={drawerLabelId}
      class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-300"
    >
      <FilterSolid class="me-2.5 h-5 w-5" />Filters
    </h2>
    <CloseButton onclick={() => (hidden = true)} class="dark:text-white" />
  </div>

  <div class="filters flex items-center gap-6">
    <Checkbox bind:checked={filters.notCaught}>Not caught?</Checkbox>

    <Checkbox bind:checked={filters.notDonated}>Not donated?</Checkbox>

    <Dropdown id="weather" label="Weather:" bind:value={filters.weather}>
      {#each Object.values(Weather).filter((weather) => weather !== Weather.OTHER) as weather}
        <option value={weather}>
          {renderWeatherFilterOption(weather)}
        </option>
      {/each}
    </Dropdown>

    <Dropdown id="month" label="Month:" bind:value={filters.month}>
      {#each Object.values(MonthFilter) as month}
        <option value={month}>
          {renderKebabCaseValue(month)}
        </option>
      {/each}
    </Dropdown>

    <DatePicker id="date" bind:value={filters.date} bind:dateString={filters.dateString} />

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
