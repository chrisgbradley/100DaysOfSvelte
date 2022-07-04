<script>
  import dots from '$lib/backgroundart/dots.svg'
  import lines from '$lib/backgroundart/lines.svg'

</script>

<div id="art-container" class="">
  <img id="dots" class="w-full top-[15%] sm:top-[5%] lg:w-2/3 left-[10%] xl:w-1/2" src={dots} alt="decorative background dots">
  <img id="lines" class="w-full top-[33%] lg:w-3/4 lg:top-1/4 right-0 xl:w-2/3 xl:top-[5%]" src={lines} alt="decorative background lines">
</div>

<style>
    #art-container {
      display: contents;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    #art-container img { 
      position: absolute;
      overflow: hidden;
    }
  </style>