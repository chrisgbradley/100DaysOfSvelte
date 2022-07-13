<script lang="ts">
  import { page } from '$app/stores';
  import themeStore from '$lib/stores';
  import Icon from '@iconify/svelte';
  import { addIcon } from '@iconify/svelte';

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

  addIcon('@custom:md:theme', {
    body: '<path d="m69.315 68.044c3.914-2.138 9.273-5.065 12.818-10.216 4.625-6.689 5.289-15.639 1.733-23.356-3.676-7.978-11.174-13.107-20.572-14.071-10.093-1.037-20.541 2.594-28.656 9.958-9.26 8.403-14.32 20.55-14.249 34.204.117 22.216 18.004 40.105 32.735 40.105 8.089 0 11.725-3.147 13.35-5.788 2.228-3.62 2.137-8.596-.228-13.281-4.818-9.874-3.503-12.321-.764-15.176.58-.601 2.234-1.505 3.833-2.379zm-7.546 19.779c1.229 2.435 1.991 5.93.447 8.438-1.733 2.817-5.9 3.408-9.091 3.408-12.401 0-27.636-16.211-27.735-35.132-.065-12.215 4.414-23.037 12.609-30.474 7.066-6.412 16.094-9.578 24.786-8.687 7.595.779 13.623 4.858 16.541 11.189 2.777 6.027 2.265 13.257-1.309 18.425-2.871 4.172-7.434 6.665-11.099 8.667-2.196 1.2-3.931 2.147-5.043 3.307-5.098 5.313-5.128 10.57-.106 20.859z" fill="currentColor"/><path d="m47.108 76.993c-3.886 0-7.048 3.162-7.048 7.047 0 3.886 3.162 7.047 7.048 7.047s7.047-3.162 7.047-7.047-3.161-7.047-7.047-7.047zm0 10.234c-1.757 0-3.186-1.429-3.186-3.186s1.43-3.186 3.186-3.186c1.757 0 3.186 1.429 3.186 3.186 0 1.756-1.429 3.186-3.186 3.186z" fill="currentColor"/><path d="m52.815 64.182c0-5.667-4.61-10.278-10.278-10.278-5.667 0-10.277 4.611-10.277 10.278s4.61 10.278 10.277 10.278c5.668 0 10.278-4.611 10.278-10.278zm-15.555 0c0-2.911 2.367-5.278 5.277-5.278s5.278 2.368 5.278 5.278-2.368 5.278-5.278 5.278-5.277-2.368-5.277-5.278z" fill="currentColor"/><path d="m73.521 44.817c0-6.971-5.671-12.642-12.642-12.642s-12.642 5.671-12.642 12.642 5.671 12.642 12.642 12.642 12.642-5.671 12.642-12.642zm-12.641 7.642c-4.214 0-7.642-3.428-7.642-7.642 0-4.213 3.428-7.642 7.642-7.642s7.642 3.428 7.642 7.642c-.001 4.214-3.428 7.642-7.642 7.642z" fill="currentColor"/><path d="m109.72 48.83c.79-2.42-.37-5.05-2.69-6.1-.66-.31-1.37-.45-2.06-.45-1.71 0-3.37.88-4.3 2.44-.63 1.06-20.846 36.683-20.851 36.692-1.852.861-3.501 2.174-4.694 3.851-1.982 2.788-2.472 6.089-1.378 9.293 1.89 5.552-1.416 11.438-1.558 11.686-.489.857-.429 1.922.154 2.718.477.651 1.23 1.022 2.017 1.022.176 0 .354-.018.53-.057.068-.015 7.479-1.834 12.041-4.345.057-.031.113-.065.168-.101 5.72-3.763 8.892-7.914 9.428-12.337.2-1.648.012-3.283-.529-4.828.001-.002.001-.003.002-.005 4.08-10.2 13.34-38.309 13.72-39.479zm-18.157 43.71c-.344 2.837-2.808 5.847-7.128 8.707-1.682.913-3.898 1.747-5.871 2.399.8-2.939 1.241-6.806-.084-10.703-.719-2.106-.006-3.763.719-4.782 1.231-1.731 3.095-2.867 5.474-2.867 2.378 0 4.027 1.051 5.12 2.262 1.093 1.21 2.058 2.618 1.77 4.984zm1.046-9.214c-1.37-1.233-2.936-2.113-4.379-2.433-.742-.266-1.52-.439-2.309-.528 5.784-10.805 18.604-32.344 19.039-33.065-.259.796-8.022 24.548-12.351 36.026z" fill="currentColor"/>',
    width: 128,
    height: 128,
  });

</script>

<svelte:window bind:innerWidth />

<header class="container max-w-7xl mx-auto p-3">
  <nav class="flex flex-row items-center justify-between relative">
    <div class="p-3 h-full z-20">
      <a href="https://kit.svelte.dev">
        <h1 class="text-xl md:text-2xl font-black text-secondary dark:text-gray inline">
          <span class="text-accent">100</span> Days of <span class="text-accent">Svelte</span>
        </h1>
      </a>
    </div>
    <div class="flex flex-row-reverse items-center lg:flex-row gap-4">

      <button
        id="menu-toggle"
        type="button"
        class="flex items-center self-end flex-col justify-center p-3 z-20 lg:hidden"
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
        class="fixed w-[300px] h-[100vh] top-0 right-0 text-lg flex flex-col pt-32 gap-4 items-center z-10 bg-primary lg:pt-0 lg:flex-row lg:flex lg:relative lg:w-auto lg:h-auto lg:bg-opacity-0"
        class:hidden={!isMenuOpen && !smscr}
        class:menu-open-slide={isMenuOpen}
      >
        <li
          class="text-center lg:w-28 text-accent active:text-secondary text-2xl font-bold lg:text-secondary lg:text-lg lg:font-normal lg:active:text-accent flex justify-center items-center py-8 lg:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/'}
        >
          <a sveltekit:prefetch href="/">Showcase</a>
        </li>
        <li
          class="text-center lg:w-28 text-accent active:text-secondary text-2xl font-bold lg:text-secondary lg:text-lg lg:font-normal lg:active:text-accent flex justify-center items-center py-8 lg:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/about'}
        >
          <a sveltekit:prefetch href="/about">About</a>
        </li>
        <li
          class="text-center lg:w-28 text-accent active:text-secondary text-2xl font-bold lg:text-secondary lg:text-lg lg:font-normal lg:active:text-accent flex justify-center items-center py-8 lg:py-0"
          on:click={() => {
            isMenuOpen = !isMenuOpen;
          }}
          class:active={$page.url.pathname === '/contact'}
        >
          <a sveltekit:prefetch href="/contact">Contact Me</a>
        </li>
      </ul>

      <div class=" justify-center items-center gap-3 hidden mb-1 lg:flex">
        <a href="https://github.com/chrisgbradley" class="">
          <Icon icon="mdi:github" style="font-size: 2.25rem;" inline={true} class="text-accent" />
        </a>
        <a href="https://www.linkedin.com/in/christianbradley/" class="">
          <Icon icon="mdi:linkedin" style="font-size: 2.25rem;" inline={true} class="text-accent" />
        </a>
        <a href="https://dribbble.com/chrisgbradley" class="">
          <Icon icon="mdi:dribbble" style="font-size: 2.25rem;" inline={true} class="text-accent" />
        </a>
      </div>
      
      <button class="text-md border-2 rounded-md px-3 lg:mb-2 leading-extra-loose border-accent ml-6 flex justify-center items-center gap-2 hover:bg-accent hover:text-secondary transition-all duration-150 z-20 " class:theme-btn-fix={isMenuOpen} on:click={cycleThemes}><Icon icon="@custom:md:theme" style="font-size: 2.25rem;" inline={true} /> <span class="hidden lg:block">Change Theme</span></button>
      

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
    background-color: rgb(var(--color-accent));
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
    right: 12px;
    top: 21px;
  }

  .theme-btn-fix {
    position:absolute;
    right: 72px;
    top: 4px;
  }
</style>
