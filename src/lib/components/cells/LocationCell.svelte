<script lang="ts">
  import { Creature, Weather, type FishOrBugWithNum } from '$lib/types';
  import { renderKebabCaseValue, renderLocation } from '$lib/utils';
  import type { ICellRendererParams } from '@ag-grid-community/core';

  export interface LocationCellProps extends ICellRendererParams<FishOrBugWithNum, number> {}
  let { data }: LocationCellProps = $props();

  const isFish = data?.type === Creature.FISH;
</script>

{#if data}
  {#each data.location as location}
    <div>
      {renderLocation(location)}

      {#if isFish && data.weather !== Weather.ANY}
        <span>
          ({renderKebabCaseValue(data.weather).toLowerCase()})
        </span>
      {/if}
    </div>
  {/each}
{/if}
