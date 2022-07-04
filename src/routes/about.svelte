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

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="container flex flex-grow max-w-7xl mx-auto">
  <div class="wrapper w-full px-8">
    <h1 class="text-6xl outline-text py-16">About</h1>
    <h2 class="text-4xl font-bold">What is <span class="text-orange">100</span> Days of <span class="text-orange">Svelte</span>?</h2>
    <h3 class="text-2xl font-semibold pt-8 lg:max-w-3xl leading-loose">A personal challenge to encourage rapid <span class="text-orange font-mono">prototyping</span>, better <span class="text-orange font-mono">UI design</span> skills, and practice <span class="text-orange font-mono">developing experiences</span>.</h3>
    <h4 class="font-bold text-xl pt-20">The Longer Version</h4>
    <p class="text-lg font-normal pt-8 lg:max-w-4xl leading-loose">
      I decided to take the 100 Days of Design from <a href="https://www.dailyui.co">DailyUI</a> and push it one step further. Rotating through 10 popular industries, each day a design is crafted to spec for the given prompt, then converted to html/css/js and uploaded as a page here. All pages should act independently of each other and should be fully functioning up until an actual payment or redirection is requested. All logos will simply reload page. All links will reload the page, unless there is a useful link that can be established. 
    </p>
    <h4 class="font-bold text-xl pt-20">The Resources</h4>
    <div class="flex flex-row align-top">
      <div>
        <h5 class="font-semibold text-lg py-6 pr-16">Inspiration & Learning</h5>
        <ul class="text-md leading-relaxed">
          <li>DailyUI</li>
          <li>Awwwards</li>
          <li>LevelUpTuts</li>
          <li>DesignCourse</li>
          <li>Kevin Powell</li>
        </ul>
      </div>

      <div>
        <h5 class="font-semibold text-lg py-6">Tools</h5>
        <ul class="text-md leading-relaxed">
          <li>Figma</li>
          <li>Svelte</li>
          <li>TailwindCSS</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
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
