<script lang="ts">
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';
  import Dropdown from './Dropdown.svelte';

  import type { Filters } from '$lib/types';
  import { Weather } from '$lib/types';
  import { renderWeatherFilterOption } from '$lib/utils';

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
