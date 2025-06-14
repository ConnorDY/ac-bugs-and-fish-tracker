<script lang="ts">
  let { children, checked = $bindable(false), ...props } = $props();
</script>

<label class="flex items-center gap-2">
  <input
    {...props}
    type="checkbox"
    bind:checked
    class="h-6 w-6 rounded-sm border-gray-300 text-teal-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 checked:dark:bg-teal-600 dark:focus:ring-teal-600 {props.class}"
  />
  <span class="dark:text-white">
    {@render children()}
  </span>
</label>
