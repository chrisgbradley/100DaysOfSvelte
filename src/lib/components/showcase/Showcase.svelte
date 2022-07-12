<script>
    import Card from '$cmp/showcase/DesignCard.svelte';
    import {weeks} from "$lib/designs.json";
</script>

{#each weeks as week}
  <div class="w-full flex items-center flex-wrap justify-center">
    <!-- Week Number -->
    <div
      class="border-primary border-solid border-2 flex items-center justify-center h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded"
    >
      <h2 class="text-accent text-center font-mono block">
        <span class="text-2xl">Week</span><br /><span class="text-4xl">{week.index}</span>
      </h2>
    </div>

    <!-- Design Card -->
    {#each week.designs as design}
      <Card contentType={design.thumbnail.type} designNumber={design.thumbnail.index + ((week.index - 1) * 5)} challenge={design.thumbnail.challenge} />
    {/each}
  </div>
{/each}
