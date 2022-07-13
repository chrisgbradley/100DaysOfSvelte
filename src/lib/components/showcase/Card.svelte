<script lang="ts">
  export let data: Types.Design | Types.Week;
</script>

{#if data.cardType === 'week'}
    <h2 class="text-accent text-center font-mono block">
      <span class="text-2xl">Week</span><br /><span class="text-4xl">{data.index}</span>
    </h2>
{:else if data.cardType === 'design'}
    {#if data.type === 'text'}
      <h4 class=" font-bold text-2xl text-center block">Day {data.index}</h4>
      {#if data.challenge !== ''}
        <h5 class=" font-bold text-lg text-center block">{data.challenge}</h5>
      {/if}
    {/if}
{/if}
