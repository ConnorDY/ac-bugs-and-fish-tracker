<script lang="ts">
  let { children, label, value = $bindable(), ...props } = $props();
</script>

<div class="flex items-center gap-2">
  <label for="weather" class="dark:text-white">{label}</label>
  <select
    {...props}
    bind:value
    class="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-500 {props.class}"
  >
    {@render children()}
  </select>
</div>
