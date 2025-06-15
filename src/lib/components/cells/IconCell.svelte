<script lang="ts">
  import type { FishOrBugWithNum, Game } from '$lib/types';
  import type { ICellRendererParams } from '@ag-grid-community/core';

  export interface IconCellProps extends ICellRendererParams<FishOrBugWithNum, number> {
    game: Game;
  }
  let { data, game }: IconCellProps = $props();

  const iconPath = data ? `games/${game.path}/${data.type}/${data.icon}` : '';
</script>

{#if data}
  <img src={iconPath} alt={`${data.name} icon`} />
{/if}
