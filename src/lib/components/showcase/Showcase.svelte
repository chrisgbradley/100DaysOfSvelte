<script lang="ts">
  import { flip } from "svelte/animate";
    import WeekCard from './WeekCard.svelte';
    import {weeks} from "$lib/designs.json";

    let display = 'card'; // @TODO: 'list' | 'card'
</script>


<div class="w-full flex flex-row flex-wrap">
  
  {#each weeks as week}
    <WeekCard {week} animate:flip />
  {/each}
</div>
