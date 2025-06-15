<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';

  let { children } = $props();
</script>

<div class="min-h-screen w-full">
  {@render children()}
</div>

<style lang="scss">
  :global {
    html {
      background: var(--color-gray-900);
    }

    html,
    body {
      width: 100vw;
    }
  }
</style>
