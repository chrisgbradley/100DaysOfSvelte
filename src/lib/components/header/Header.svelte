<script lang="ts">
  import { page } from '$app/stores';
  import themeStore from '$lib/stores';

  $: innerWidth = 0;
  let smscr: boolean = innerWidth < 768;
  export let isMenuOpen = false;

  function cycleThemes() {
    console.log('clicked');
    let _current = $themeStore.themes.indexOf($themeStore.theme);
    let _new;
    if(_current + 1 >= $themeStore.themes.length) {
      _new = 0;
    } else {
      _new = _current + 1;
    }
    $themeStore.theme = $themeStore.themes[_new];
  }
</script>

<svelte:window bind:innerWidth />

<header class="container max-w-7xl mx-auto md:p-8">
  <nav class="flex flex-row items-center justify-between relative">
    <div class="p-8 h-full">
      <a href="https://kit.svelte.dev">
        <h1 class="text-xl md:text-2xl font-black text-secondary dark:text-gray inline">
          <span class="text-accent">100</span> Days of <span class="text-accent">Svelte</span>
        </h1>
      </a>
    </div>
    <div class="flex flex-row">

      <button
        id="menu-toggle"
        type="button"
        class="flex items-center self-end flex-col justify-center p-8 z-20 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        class:menu-btn-fix={isMenuOpen}
      >
        <span class="sr-only">Open main menu</span>
        <span
          aria-hidden="true"
          class="h-0.5 w-8 my-0.5 rounded-full bg-accent transition ease-in-out transform duration-300"
          class:rotate-45={isMenuOpen}
          class:translate-y-1.5={isMenuOpen}
          class:-translate-y-1.5={!isMenuOpen}
        />
        <span
          aria-hidden="true"
          class="h-0.5 w-8 my-0.5 rounded-full bg-accent transition ease-in-out transform duration-300"
          class:opacity-0={isMenuOpen}
        />
        <span
          aria-hidden="true"
          class="h-0.5 w-8 my-0.5 rounded-full bg-accent transition ease-in-out transform duration-300"
          class:-rotate-45={isMenuOpen}
          class:-translate-y-1.5={isMenuOpen}
          class:translate-y-1.5={!isMenuOpen}
        />
      </button>
  
      <ul
        id="mobile-menu"
        class="fixed w-[100vw] h-[100vh] top-0 text-lg flex flex-col justify-center items-center z-10 bg-secondary md:flex-row md:flex md:relative md:w-auto md:h-auto md:bg-opacity-0 "
        class:hidden={!isMenuOpen && !smscr}
      >
        <li
          class="text-center md:w-28 text-accent active:text-secondary text-2xl font-bold md:text-secondary md:text-lg md:font-normal md:active:text-accent flex justify-center items-center py-8 md:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/'}
        >
          <a sveltekit:prefetch href="/">Home</a>
        </li>
        <li
          class="text-center md:w-28 text-accent active:text-secondary text-2xl font-bold md:text-secondary md:text-lg md:font-normal md:active:text-accent flex justify-center items-center py-8 md:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/about'}
        >
          <a sveltekit:prefetch href="/about">About</a>
        </li>
        <li
          class="text-center md:w-28 text-accent active:text-secondary text-2xl font-bold md:text-secondary md:text-lg md:font-normal md:active:text-accent flex justify-center items-center py-8 md:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/contact'}
        >
          <a sveltekit:prefetch href="/contact">Contact Me</a>
        </li>
      </ul>
      
      <button class="text-lg border-4 rounded-md px-3 py-1 leading-extra-loose border-accent ml-6" on:click={cycleThemes}>Change Theme</button>

    </div>
  </nav>
</header>

<style>
  #mobile-menu a {
    display: block;
    position: relative;
    padding: 0.2em 0;
    overflow: hidden;
    transition: color 150ms, transform 150ms;
  }

  #mobile-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: rgb(var(--color-primary));
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: translate3d(-105%, 0, 0);
  }

  #mobile-menu a:hover::after,
  #mobile-menu a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  #mobile-menu a:hover::after,
  #mobile-menu a:focus::after {
    transform: translate3d(0, 0, 0);
  }

  .menu-btn-fix {
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
