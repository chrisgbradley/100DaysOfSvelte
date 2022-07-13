<script lang="ts">
	import { fly } from 'svelte/transition';

    export let design: Types.Design;
</script>

<div
  class="text-accent border-primary border-solid border-2 flex flex-col items-center justify-center gap-16 bg-secondary bg-opacity-10 h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded hover:text-secondary hover:bg-accent hover:bg-opacity-50 transition-all ease-in-out duration-150" transition:fly="{{ x: -50, duration: 300 }}"
>
  {#if design.type === 'text'}
    <h4 class=" font-bold text-2xl text-center block">Day {design.index}</h4>
    {#if design.challenge !== ''}
      <h5 class=" font-bold text-lg text-center block">{design.challenge}</h5>
    {/if}
  {/if}
</div>
