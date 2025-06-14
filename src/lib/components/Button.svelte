<script lang="ts">
  const { children, onclick, ...props } = $props();
</script>

<button
  {...props}
  {onclick}
  class="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 {props.class}"
>
  {@render children()}
</button>
