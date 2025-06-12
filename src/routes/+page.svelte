<script>
  import BugTable from '$lib/components/BugTable.svelte';
  import FishTable from '$lib/components/FishTable.svelte';
  import { DoubutsuNoMoriEPlus } from '$lib/data/doubutsu-no-mori-eplus';
</script>

<h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">Fish</h2>

<FishTable game={DoubutsuNoMoriEPlus} />

<h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">Bugs</h2>

<BugTable game={DoubutsuNoMoriEPlus} />
