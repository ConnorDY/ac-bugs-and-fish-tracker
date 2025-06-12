<script lang="ts">
  import { wikiUrl } from '$lib/data/wiki';
  import type { FishOrBug } from '$lib/types/fish-or-bug';
  import type { Game } from '$lib/types/game';
  import {
    renderKebabCaseValue,
    renderLocation,
    renderTime,
    renderWeather
  } from '$lib/utils/utils';
  import Months from './Months.svelte';

  interface Props {
    game: Game;
    num: number;
    data: FishOrBug;
  }

  let { game, num, data }: Props = $props();
  const iconPath = `/games/${game.path}/${data.type}/${data.icon}`;
  const shadowIconPath = `/games/${game.path}/shadow/${data.shadow}.png`;

  const isFish = data.type === 'fish';
  const isBug = data.type === 'bug';
</script>

<tr class="creature-row border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <td class="creature-num px-3 py-2">{num}</td>

  <td class="creature-caught px-3 py-2">
    <input
      type="checkbox"
      class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600"
    />
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
    <div>
      <img src="/icons/bells.png" alt="Bells icon" />
      <span>{data.price.toLocaleString()} bells</span>
    </div>
  </td>

  {#if isFish}
    <td class="fish-shadow px-3 py-2">
      <div>
        <img src={shadowIconPath} alt="" aria-hidden={true} />
        <span>{renderKebabCaseValue(data.shadow!, true)}</span>
      </div>
    </td>
  {/if}

  <td class="creature-location px-3 py-2">
    {renderLocation(data.location)}
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

  .creature-price > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .fish-shadow > div {
    display: flex;
    align-items: center;

    img {
      mix-blend-mode: darken;
    }
  }
</style>
