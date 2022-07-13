<script lang="ts">
	import { flip } from 'svelte/animate';
  import DesignCard from './DesignCard.svelte';


  export let show: boolean = false;
  export let week: Types.Week;
</script>

<!-- Week -->
<div
  class="border-primary border-solid border-2 flex items-center justify-center h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded"
  on:click={() => {
    show = !show;
  }}
>
  <h2 class="text-accent text-center font-mono block">
    <span class="text-2xl">Week</span><br /><span class="text-4xl">{week.index}</span>
  </h2>
</div>

<!-- Designs -->
{#if show}
  {#each week.designs as design}
    <DesignCard {design} />
  {/each}
{/if}

<style>
</style>
