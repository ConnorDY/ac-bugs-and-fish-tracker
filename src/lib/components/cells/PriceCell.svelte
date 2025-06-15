<script lang="ts">
  import type { FishOrBugWithNum } from '$lib/types';
  import type { ICellRendererParams } from '@ag-grid-community/core';

  export interface PriceCellProps extends ICellRendererParams<FishOrBugWithNum, number> {}
  let { data }: PriceCellProps = $props();
</script>

{#if data}
  <div class="flex items-center gap-1">
    <img src="icons/bells.png" alt="Bells icon" />
    <span>{data.price.toLocaleString()} bells</span>
  </div>
{/if}
