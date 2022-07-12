<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
import Showcase from "$src/lib/components/showcase/Showcase.svelte";

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="100 Days of Design + Code" />
</svelte:head>

<section class="container max-w-7xl p-6 mx-auto">
  <div class="lg:w-4/5 mx-auto flex flex-col items-left sm:py-32 md:py-48 lg:py-64 lg:flex-row lg:items-center lg:justify-between">
    <h1 class="text-center pt-24 sm:pt-0 text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl 2xl:w-full"><span class="outline-text font-black text-8xl">100 Days</span><br><span class="leading-loose font-handwriting">Design</span> + <span class="font-mono font-bold text-accent">Code</span></h1>
    <p class="text-center leading-loose pt-24 font-light text-xl sm:text-xl sm:leading-loose md:pt-32 lg:pl-16 lg:text-2xl lg:leading-loose lg:pt-0 lg:pr-16 2xl:leading-extra-loose 2xl:text-3xl 2xl:w-[75%]">
      Prompted by <span class="text-accent font-black">DAILYUI</span><br/>
      Built with <span class="text-accent font-black">SVELTE</span><br/>
      Fueled by <span class="text-accent font-black">TOO MUCH COFFEE</span>
    </p>
  </div>
</section>

<section class="container max-w-7xl mx-auto flex flex-col items-left pt-16 sm:pt-0 lg:flex-row lg:items-center lg:justify-between xl:px-32 sm:container">
  <div class="w-full">
    <Showcase/>
  </div>
</section>

<style>
  
</style>
