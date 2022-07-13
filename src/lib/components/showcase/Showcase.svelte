<script lang="ts">
  import { flip } from 'svelte/animate';
  import WeekCard from './WeekCard.svelte';
  import { weeks } from '$lib/designs.json';
  import Index from '$src/routes/index.svelte';
  import Card from './Card.svelte';

  // cards: []
  // -- index: number
  // -- type: Types.Week | Types.Design
  // -- show: boolean

  // cards = weeks.map()
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

<!-- <div
  class="text-accent border-primary border-solid border-2 flex flex-col items-center justify-center gap-16 bg-secondary bg-opacity-10 h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded hover:text-secondary hover:bg-accent hover:bg-opacity-50 transition-all ease-in-out duration-150"
/>

<div
  class="border-primary border-solid border-2 flex items-center justify-center h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded"
  on:click={() => {
    week.show = !week.show;
  }}
/> -->


<style>
  .hide {
    max-width: 0;
    overflow: hidden;
  }
</style>