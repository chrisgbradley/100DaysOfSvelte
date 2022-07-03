<script>
  import { page } from '$app/stores';
  import logo from './svelte-logo.svg';
</script>

<header class="container max-w-7xl mx-auto p-6">
  <nav class="flex flex-row items-center justify-between">

    <div class=" h-full">
      <a href="https://kit.svelte.dev">
        <h1 class="text-xl md:text-2xl font-black text-white dark:text-gray inline"><span class="text-orange">100</span> Days of <span class="text-orange">Svelte</span></h1>
      </a>
    </div>

    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>

    <ul id="mobile-menu" class="text-lg hidden sm:flex sm:items-center">
      <li class="text-center w-32 h-full active:text-orange" class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class="text-center w-32 h-full active:text-orange" class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class="text-center w-32 h-full active:text-orange" class:active={$page.url.pathname === '/contact'}>
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
</style>
