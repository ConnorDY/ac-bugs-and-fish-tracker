<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { CaughtOrDonatedIcon } from '$lib/types/caught-or-donated-icon';
  import type { FishOrBug } from '$lib/types/fish-or-bug';
  import { getFishOrBugData, saveData, updateFishOrBugData } from '$lib/utils/save-data.svelte';
  import { get } from 'svelte/store';

  interface Props {
    game: Game;
    fishOrBug: FishOrBug;
    type: CaughtOrDonatedIcon;
  }
  let { game, fishOrBug, type }: Props = $props();

  const iconPath = `/games/${game.path}/other/`;

  const getInitialState = (): boolean => {
    const data = getFishOrBugData(game, fishOrBug);

    switch (type) {
      case CaughtOrDonatedIcon.FISH:
      case CaughtOrDonatedIcon.BUG:
        return data.caught || false;

      case CaughtOrDonatedIcon.MUSEUM:
        return data.donated || false;

      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };

  let active = $state(getInitialState());

  const getLabelText = () => {
    switch (type) {
      case CaughtOrDonatedIcon.FISH:
        return 'Caught fish?';

      case CaughtOrDonatedIcon.BUG:
        return 'Caught bug?';

      case CaughtOrDonatedIcon.MUSEUM:
        return 'Donated to museum?';
    }
  };

  const toggleValue = (event: Event) => {
    event.preventDefault();
    active = !active;

    switch (type) {
      case CaughtOrDonatedIcon.FISH:
      case CaughtOrDonatedIcon.BUG:
        updateFishOrBugData(game, fishOrBug, {
          caught: active
        });
        break;

      case CaughtOrDonatedIcon.MUSEUM:
        updateFishOrBugData(game, fishOrBug, {
          donated: active
        });
        break;

      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };
</script>

<label class="toggle-icon flex">
  <input
    type="checkbox"
    checked={active}
    onchange={toggleValue}
    class="checkbox rounded-full border-none bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-2 focus:outline-offset-2 focus:outline-teal-600"
  />

  <span class="sr-only">{getLabelText()}</span>

  <div class="icon" class:active style:background={`url(${iconPath}${type}.png)`}></div>
</label>

<style lang="scss">
  .toggle-icon {
    width: 32px;
    height: 32px;
  }

  .checkbox {
    width: 100%;
    height: 100%;
  }

  .icon {
    width: 32px;
    height: 32px;
    position: absolute;

    background-position: center !important;
    background-repeat: no-repeat !important;

    filter: brightness(40%);

    &.active {
      filter: none;
    }
  }
</style>
