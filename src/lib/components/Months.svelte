<script lang="ts">
  import { Month, type Months } from '$lib/types/shared';

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

  const isActiveMonth = (month: string): boolean => months.hasOwnProperty(month.toLowerCase());

  const isFirstHalf = (month: string): boolean => {
    if (!isActiveMonth(month)) return false;
    return months[month.toLowerCase() as keyof Months] === Month.FIRST_HALF;
  };

  const isSecondHalf = (month: string): boolean => {
    if (!isActiveMonth(month)) return false;
    return months[month.toLowerCase() as keyof Months] === Month.SECOND_HALF;
  };
</script>

<div class="months flex gap-2">
  {#each monthList as month}
    <span
      class="month"
      class:active={isActiveMonth(month)}
      class:first-half={isFirstHalf(month)}
      class:second-half={isSecondHalf(month)}
    >
      {month.slice(0, 3)}
    </span>
  {/each}
</div>

<style lang="scss">
  .month.active {
    color: var(--color-teal-600);
  }

  .month.first-half {
    background: linear-gradient(
      to right,
      var(--color-teal-600) 0%,
      var(--color-teal-600) 50%,
      var(--color-gray-400) 51%,
      var(--color-gray-400) 100%
    );
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .month.second-half {
    background: linear-gradient(
      to right,
      var(--color-gray-400) 0%,
      var(--color-gray-400) 50%,
      var(--color-teal-600) 51%,
      var(--color-teal-600) 100%
    );
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
