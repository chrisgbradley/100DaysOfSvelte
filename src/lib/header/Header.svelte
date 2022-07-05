<script lang="ts">
  import { page } from '$app/stores';
  import logo from './svelte-logo.svg';

  $: innerWidth = 0
  // $: open = true;

  let smscr: boolean = innerWidth < 640

  export let isMenuOpen = false;
</script>

<svelte:window bind:innerWidth />

<header class="container max-w-7xl mx-auto sm:p-8">
  <nav class="flex flex-row items-center justify-between relative">
    <div class="p-8 h-full">
      <a href="https://kit.svelte.dev">
        <h1 class="text-xl md:text-2xl font-black text-white dark:text-gray inline"><span class="text-orange">100</span> Days of <span class="text-orange">Svelte</span></h1>
      </a>
    </div>

    <button id="menu-toggle" type="button" class="flex items-center self-end sm:hidden flex-col justify-center p-8 z-20" aria-controls="mobile-menu" aria-expanded="false" on:click="{() => isMenuOpen = !isMenuOpen}" class:menu-btn-fix={isMenuOpen}>
      <span class="sr-only">Open main menu</span>
      <span aria-hidden="true" class="burger-line" class:rotate-45={isMenuOpen} class:translate-y-1.5={isMenuOpen} class:-translate-y-1.5={!isMenuOpen}></span>
      <span aria-hidden="true" class="burger-line" class:opacity-0={isMenuOpen}></span>
      <span aria-hidden="true" class="burger-line" class:-rotate-45={isMenuOpen} class:-translate-y-1.5={isMenuOpen} class:translate-y-1.5={!isMenuOpen}></span>
    </button>

    <ul id="mobile-menu" class="fixed w-[100vw] h-[100vh] top-0 text-lg flex flex-col justify-center items-center z-10 bg-white sm:flex-row sm:flex sm:relative sm:w-auto sm:h-auto sm:bg-opacity-0" class:hidden={!isMenuOpen && !smscr}>
      <li class="text-center sm:w-28 text-orange active:text-white text-2xl font-bold sm:text-white sm:text-lg sm:font-normal sm:active:text-orange flex justify-center items-center py-8 sm:py-0" on:click={() => { isMenuOpen = !isMenuOpen }} class:active={$page.url.pathname === '/'}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class="text-center sm:w-28 text-orange active:text-white text-2xl font-bold sm:text-white sm:text-lg sm:font-normal sm:active:text-orange flex justify-center items-center py-8 sm:py-0" on:click={() => { isMenuOpen = !isMenuOpen }} class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class="text-center sm:w-28 text-orange active:text-white text-2xl font-bold sm:text-white sm:text-lg sm:font-normal sm:active:text-orange flex justify-center items-center py-8 sm:py-0" on:click={() => { isMenuOpen = !isMenuOpen }} class:active={$page.url.pathname === '/contact'}>
        <a sveltekit:prefetch href="/contact">Contact Me</a>
      </li>
    </ul>
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
    background-color: #FC4837;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  #mobile-menu a:hover::after,
  #mobile-menu a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  #mobile-menu a:hover::after,
  #mobile-menu a:focus::after{
    transform: translate3d(0, 0, 0);
  }

  .menu-btn-fix {
    position: fixed;
    right:0;
    top:0;
  }

  header.menu-open {

  }
</style>
