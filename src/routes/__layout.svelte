<script context="module" lang="ts">
  export const load = async ({url}:Record<string, any>) => ({ props: { refresh: url } });
</script>

<script lang="ts">
  import { ThemeWrapper, ThemeToggle } from 'svelte-themer';

  import { browser } from '$app/env';
  import { page } from '$app/stores';
  
  import { webVitals } from '$lib/vitals';

  import PageTransition from '$cmp/pagetransition/PageTransition.svelte';
  import Header from '$cmp/header/Header.svelte';
  import Footer from '$cmp/footer/Footer.svelte';
  import Background from '$cmp/background/Background.svelte';
import ThemeProvider from '$cmp/theme/ThemeProvider.svelte';


  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    });
  }

  let isMenuOpen = false
  export let refresh: URL;
</script>


<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
  <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&family=Overpass:wght@400;600;900&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>

<ThemeProvider />

<div id="content" class="relative flex flex-col min-h-screen bg-primary text-white font-sans min-w-[400px]">
  <Header bind:isMenuOpen={isMenuOpen} />
  
    <main class="" class:overflow-x-hidden={refresh} class:menu-open={isMenuOpen}>
      <PageTransition {refresh}>
        <slot />
      </PageTransition>
    </main>
  
  <Footer bind:isMenuOpen={isMenuOpen} />
</div>

<style>
  @import '../app.css';

  #content {
    z-index: 5;
  }
  main {
    transition: all ease-in 300ms;
  }

  main.menu-open {
    transform: translateX(-300px);
  }
</style>