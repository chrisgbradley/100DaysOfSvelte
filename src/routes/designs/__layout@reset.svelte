<script context="module">
    import { browser, dev } from '$app/env';
  
    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;
  
    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;
  
    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    // export const prerender = true;
  </script>

<script>
    import { Icon, ArrowLeft, Filter } from "svelte-hero-icons";

    $: hover = false
    $: backHover = hover ? 'text-orange transition-all ease-in-out duration-300':''

    let flip = function () {hover = !hover}
</script>



    
<header class="border-b-orange border-b-2 bg-gray-dark px-4 h-8 ">
    <nav class="w-72 h-full flex justify-between items-center">
        <a sveltekit:prefetch href="/" class="flex flex-row items-center gap-4 text-white hover:pl-2 transition-all ease-in-out duration-300" on:mouseenter={flip} on:mouseleave={flip}><Icon src="{ArrowLeft}" size="16" class={backHover} /> <span class="pt-[3px]">Home</span></a>
        <a href="https://kit.svelte.dev">
            <h1 class="text-xl md:text-base font-black text-white dark:text-gray inline"><span class="text-orange">100</span> Days of <span class="text-orange">Svelte</span></h1>
        </a>
    </nav>
</header>

<slot />

<style>
    @import '../../app.css';
</style>