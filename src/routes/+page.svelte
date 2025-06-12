<script>
  import BugTable from '$lib/components/BugTable.svelte';
  import FishTable from '$lib/components/FishTable.svelte';
  import { DoubutsuNoMoriEPlus } from '$lib/data/doubutsu-no-mori-eplus';
  import { wikiUrl } from '$lib/data/wiki';
</script>

<h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
  <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.fishWikiPage}`}>Fish</a>
</h2>

<FishTable game={DoubutsuNoMoriEPlus} />

<h2 class="px-4 py-4 text-4xl font-extrabold dark:text-white">
  <a href={`${wikiUrl}${DoubutsuNoMoriEPlus.bugsWikiPage}`}>Bugs</a>
</h2>

<BugTable game={DoubutsuNoMoriEPlus} />
