<script lang="ts">
  import { Datepicker, Tooltip } from 'flowbite';
  import { onMount } from 'svelte';

  let { id, value = $bindable(), dateString = $bindable(''), ...props } = $props();
  let tooltipId = $derived(`${id}-tooltip`);
  let tooltipTriggerId = $derived(`${id}-tooltip-trigger`);

  let datePicker = $state<Datepicker | undefined>(value);

  $effect(() => {
    if (!value && datePicker) {
      datePicker.setDate('');
      dateString = '';
    }
  });

  onMount(() => {
    const datePickerEl = document.querySelector(`#${id}`) as HTMLInputElement;
    const tooltipEl = document.querySelector(`#${tooltipId}`) as HTMLElement;
    const tooltipTriggerEl = document.querySelector(`#${tooltipTriggerId}`) as HTMLElement;

    // setup datepicker
    datePicker = new Datepicker(datePickerEl, {
      orientation: 'top',
      autohide: true
    });

    datePickerEl.addEventListener('hide', () => {
      value = datePicker!.getDate() || undefined;
      dateString = datePickerEl.value;
    });

    // setup tooltip
    const tooltip = new Tooltip(tooltipEl, tooltipTriggerEl, {});

    // hide the tooltip when the datepicker is shown
    datePickerEl.addEventListener('show', () => {
      tooltip.hide();
    });
  });
</script>

<div class="flex items-center gap-2">
  <label for={id} class="dark:text-white">Date:</label>

  <div id={tooltipTriggerId} class="relative max-w-sm">
    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
      <svg
        class="h-4 w-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
        />
      </svg>
    </div>

    <input
      {...props}
      {id}
      bind:value={dateString}
      type="text"
      placeholder="Select date"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-600 dark:focus:ring-teal-600"
    />
  </div>

  <div
    id={tooltipId}
    role="tooltip"
    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xs transition-opacity duration-300 dark:bg-gray-700"
  >
    Setting a date filter will override the month filter.
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</div>
