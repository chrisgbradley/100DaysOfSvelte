<script context="module">
  export const prerender = true;
</script>

<script>
  import {weeks} from "$lib/designs.json";


</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="100 Days of Design + Code" />
</svelte:head>

<section class="container max-w-7xl p-6 mx-auto">
  <div class="lg:w-4/5 mx-auto flex flex-col items-left sm:py-32 md:py-48 lg:py-64 lg:flex-row lg:items-center lg:justify-between">
    <h1 class="pt-24 sm:pt-0 text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl 2xl:w-full"><span class="outline-text">100 Days</span><br><span class="leading-loose font-handwriting">Design</span> <span class="sm:hidden"><br/></span>+ <span class="font-mono font-bold text-orange">Code</span></h1>
    <p class=" leading-loose pt-24 font-light text-xl sm:text-xl sm:leading-loose md:pt-32 lg:pl-16 lg:text-2xl lg:leading-loose lg:pt-0 lg:pr-16 2xl:leading-extra-loose 2xl:text-3xl 2xl:w-[75%]">
      Prompted by <span class="text-orange font-black">DAILYUI</span><br/>
      Built with <span class="text-orange font-black">SVELTE</span><br/>
      Fueled by <span class="text-orange font-black">TOO MUCH COFFEE</span>
    </p>
  </div>
</section>

<section class="container max-w-7xl mx-auto flex flex-col items-left pt-16 sm:pt-0 lg:flex-row lg:items-center lg:justify-between xl:px-32 sm:container">
  <div class="w-full">
    {#each weeks as week}
      <div class="w-full flex items-center flex-wrap justify-center">
        <!-- Week Number -->
        <div class="border-gray-dark border-solid border-2 flex items-center justify-center h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded">
          <h2 class="text-orange text-center font-mono block"><span class="text-2xl">Week</span><br/><span class="text-4xl">{week.index}</span></h2>
        </div>
        
        <!-- Design Card -->
        {#each week.designs as design}
          <div class="border-gray-dark border-solid border-2 flex items-center justify-center bg-white h-[200px] w-1/2 sm:w-1/3 lg:h-[250px] xl:w-1/6 xl:h-[175px] 2xl:h-[200px] md:rounded">

            {#if design.thumbnail.type === "text"}
              <h4 class="text-orange font-bold text-xl text-center block">{design.thumbnail.content}</h4>
            {/if}

          </div>
        {/each}

      </div>
    {/each}
  </div>
</section>

<style>
  .outline-text {
    color: #1e1e1e;
    text-shadow: -1px  1px 0 #D2D0CF,
                  1px  1px 0 #D2D0CF,
                  1px -1px 0 #D2D0CF,
                 -1px -1px 0 #D2D0CF;
  }
</style>
