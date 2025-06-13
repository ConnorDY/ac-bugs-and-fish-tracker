<script lang="ts">
  import { wikiUrl } from '$lib/data/wiki';
  import { CaughtOrDonatedIcon } from '$lib/types/caught-or-donated-icon';
  import type { FishOrBugWithNum } from '$lib/types/fish-or-bug';
  import type { Game } from '$lib/types/game';
  import { Weather } from '$lib/types/shared';
  import {
    renderKebabCaseValue,
    renderLocation,
    renderTime,
    renderWeather
  } from '$lib/utils/utils';
  import Months from './Months.svelte';
  import ToggleIcon from './ToggleIcon.svelte';

  interface Props {
    game: Game;
    data: FishOrBugWithNum;
  }
  let { game, data }: Props = $props();

  const iconPath = `/games/${game.path}/${data.type}/${data.icon}`;
  const shadowIconPath = `/games/${game.path}/shadow/${data.shadow}.png`;

  const isFish = data.type === 'fish';
  const isBug = data.type === 'bug';
</script>

<tr class="creature-row border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <td class="creature-num px-3 py-2">{data.num}</td>

  <td class="creature-caught px-3 py-2">
    <ToggleIcon
      {game}
      fishOrBug={data}
      type={isFish ? CaughtOrDonatedIcon.FISH : CaughtOrDonatedIcon.BUG}
    />
  </td>

  <td class="creature-donated px-3 py-2">
    <ToggleIcon {game} fishOrBug={data} type={CaughtOrDonatedIcon.MUSEUM} />
  </td>

  <td class="creature-name px-3 py-2">
    {#if data.wikiPage}
      <a href={`${wikiUrl}${data.wikiPage}`}>
        {data.name}
      </a>
    {:else}
      {data.name}
    {/if}
  </td>

  <td class="creature-icon px-3 py-2"><img src={iconPath} alt={`${data.name} icon`} /></td>

  <td class="creature-price px-3 py-2">
    <div class="flex items-center gap-1">
      <img src="/icons/bells.png" alt="Bells icon" />
      <span>{data.price.toLocaleString()} bells</span>
    </div>
  </td>

  {#if isFish}
    <td class="fish-shadow px-3 py-2">
      <div class="flex items-center">
        <img src={shadowIconPath} alt="" aria-hidden={true} />
        <span>{renderKebabCaseValue(data.shadow!, true)}</span>
      </div>
    </td>
  {/if}

  <td class="creature-location px-3 py-2">
    {renderLocation(data.location)}

    {#if isFish && data.weather !== Weather.ANY}
      <span>
        ({renderKebabCaseValue(data.weather).toLowerCase()})
      </span>
    {/if}
  </td>

  {#if isBug}
    <td class="bug-weather px-3 py-2">
      {renderWeather(data.weather)}
    </td>
  {/if}

  <td class="creature-time px-3 py-2">
    {renderTime(data.time)}
  </td>

  <td class="creature-months px-3 py-2">
    <Months months={data.months} />
  </td>
</tr>

<style lang="scss">
  .creature-row:nth-child(odd) {
    background-color: var(--color-gray-900);
  }

  .fish-shadow img {
    mix-blend-mode: darken;
  }
</style>
