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
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="What is 100 Days of Svelte and why should you do it too?" />
</svelte:head>

<section class="container flex flex-grow max-w-7xl mx-auto">
  <div class="wrapper w-full px-8">
    <h1 class="text-6xl outline-text py-16">About</h1>
    <h2 class="text-4xl font-bold">What is <span class="text-orange">100</span> Days of <span class="text-orange">Svelte</span>?</h2>
    <h3 class="text-2xl font-semibold pt-8 lg:max-w-3xl leading-loose">A personal challenge to encourage rapid <span class="text-orange font-mono">prototyping</span>, better <span class="text-orange font-mono">UI design</span> skills, and practice <span class="text-orange font-mono">developing experiences</span>.</h3>
    <h4 class="font-bold text-xl pt-20">The Longer Version</h4>
    <p class="text-lg font-normal pt-8 lg:max-w-4xl leading-loose">
      I decided to take the 100 Days of Design from <a class="link " href="https://www.dailyui.co">DailyUI</a> and push it one step further. Rotating through 10 popular industries, each day a design is crafted to spec for the given prompt, developed using Svelte, and hosted -- currently on Vercel.
    </p>
    <h5 class="font-bold text-lg pt-8">The Rules</h5>
    <ul class="text-md leading-relaxed list-inside list-decimal pl-6">
      <li>All pages are independent.
        <ul class="list-inside list-disc pl-6"><li>This means separate CSS files. Repitition is half of the point of this project.</li></ul>
      </li>
      <li>All tools are on the table. 
        <ul class="list-inside list-disc pl-6">
          <li>Render however, host whereever, custom or prebuilt components...</li>
          <li>As long as Svelte is used and the design matches the concept, go nuts.</li>
        </ul>
      </li>
      <li>All pages should be fully responsive.</li>
      <li>All pages should be fully accessible.</li>
    </ul>

    <h4 class="font-bold text-xl pt-20">The Why</h4>
    <p class="text-lg font-normal pt-8 lg:max-w-4xl leading-loose">
      This project allows practice with rapid prototyping, improves knowledge of a framework and its community, and provides training wheels for taming the scope monster by applying a faux deadline. In addition to the deadline, the page is already designed, so having the end product already in mind enforces the 'good enough' mentality and encourages you to move on and continue learning.
    </p>

    <h4 class="font-bold text-xl pt-20">The Resources</h4>
    <div class="flex flex-row pl-6 basis-full flex-1 lg:max-w-4xl">
      <div class="flex flex-col flex-1 basis-full">
        <h5 class="font-semibold text-lg pt-6">Inspiration & Learning</h5>
        <ul class="text-md leading-relaxes pl-6">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.dailyui.co" class="link">DailyUI</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.awwwards.com" class="link">Awwwards</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/LevelUpTuts" class="link">LevelUpTuts</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/DesignCourse" class="link">DesignCourse</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/kepowob" class="link">Kevin Powell</a></li>
        </ul>
      </div>

      <div class="flex flex-col flex-1 basis-full">
        <h5 class="font-semibold text-lg pt-6">Tools</h5>
        <ul class="text-md leading-relaxes pl-6">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.figma.com" class="link">Figma</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://svelte.dev" class="link">Svelte</a> / <a target="_blank" rel="noopener noreferrer" href="https://kit.svelte.dev" class="link">SvelteKit</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com" class="link">TailwindCSS</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://vercel.com/" class="link">Vercel</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>

  .link {
    display: inline-block;
    position: relative;
    padding: 12px 0 0 0;
    text-decoration: none;
    transition: all ease-in 150ms;
  }

  .link::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #FC4837;
    border-radius: 3px;
    transition: all ease-in 150ms;
  }
  .link:hover {
    color:#D2D0CF;
  }

  .link:hover::after {
    background-color:#D2D0CF;
    height: 0.15em;
    bottom: 5%;
  }
</style>
