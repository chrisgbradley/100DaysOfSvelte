<script lang="ts">
  export let contentType: string;
  export let designNumber: number;
  export let challenge: string = '';
</script>

<div
  class="text-accent border-primary border-solid border-2 flex flex-col items-center justify-center gap-16 bg-secondary bg-opacity-10 h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded hover:text-secondary hover:bg-accent hover:bg-opacity-50 transition-all ease-in-out duration-150"
>
  {#if contentType === 'text'}
    <h4 class=" font-bold text-2xl text-center block">Day {designNumber}</h4>
    {#if challenge !== ''}
      <h5 class=" font-bold text-lg text-center block">{challenge}</h5>
    {/if}
  {/if}
</div>
