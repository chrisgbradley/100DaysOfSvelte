<script>
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import '../app.css';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    });
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&family=Overpass:wght@400;600;900&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>


<body class="flex flex-col min-h-screen bg-gray-dark text-white font-sans">
  <div id="art">
  </div>

  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</body>

<style>
  #art {
    position:absolute;
    height: 1560px;
    width: 150%;
    overflow: hidden;
    background-image: url('line-art.svg'),
    url('blob-art.svg');
    background-repeat: no-repeat;
  }
</style>