<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="min-h-screen w-full dark:bg-gray-900">
  {@render children()}
</div>
