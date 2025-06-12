<script lang="ts">
  import type { Months } from '$lib/types/shared';

  interface Props {
    months: Months;
  }

  let { months }: Props = $props();

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
</script>

<div class="months">
  {#each monthList as month}
    <span class="month" class:active={months.hasOwnProperty(month.toLowerCase())}>
      {month.slice(0, 3)}
    </span>
  {/each}
</div>

<style lang="scss">
  .months {
    display: flex;
    gap: 5px;
  }

  .month.active {
    color: var(--color-teal-600);
  }
</style>
