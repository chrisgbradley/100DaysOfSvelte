<script lang="ts">
  import { flip } from 'svelte/animate';
  import { weeks } from '$lib/designs.json';
  import Card from './Card.svelte';

  
  let cards = weeks.flatMap((week) => {
    let wIdx = week.index;
    let designs = week.designs.map(({ index, ...obj }) => ({
      index: index + (wIdx - 1) * 5,
      ...obj,
      cardType: 'design',
      show: false,
      week: wIdx
    }));
    return [{ index: wIdx, cardType: 'week', show: false }, ...designs];
  });

  function handleWeekClick(index: number) {
    cards.forEach((card) => {
      
      if((card.cardType === "week" && card.index === index) || (card.cardType === "design" && card.week === index)) {
          card.show = !card.show;
      }
    });

    cards = cards;
  }
  const animationOptions = {duration: 175, class: "opacity-0"};
</script>

<div class="w-full flex flex-row flex-wrap overflow-hidden">
  {#each cards as card (card.cardType + card.index)}
    <div
      class="flex flex-col gap-12 items-center justify-center h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded"
      class:hide={!card.show && card.cardType === "design"}
      on:click={() => {
        if(card.cardType === "week") handleWeekClick(card.index);
      }}
      animate:flip={animationOptions}
    >
      <Card data={card} />
    </div>
  {/each}
</div>


<style>
  .hide {
    max-width: 0;
    overflow: hidden;
  }
</style>