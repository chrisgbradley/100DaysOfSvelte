<script>
  import dots from '$lib/backgroundart/dots.svg'
  import lines from '$lib/backgroundart/lines.svg'
  import waves from '$lib/backgroundart/steps-wave.svg'

</script>

<div id="art-bg" class="bg-img1 aspect-[3/4] top-[200px] xl:top-0 md:aspect-[16/9] opacity-10 md:opacity-5">
  <!-- <img id="dots" class="w-full top-[15%] sm:top-[5%] lg:w-2/3 left-[10%] xl:w-1/2" src={dots} alt="decorative background dots">
  <img id="lines" class="w-full top-[33%] lg:w-3/4 lg:top-1/4 right-0 xl:w-2/3 xl:top-[5%]" src={lines} alt="decorative background lines"> -->
  
</div>

<style>
    /* #art-container {
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
    } */

    #art-bg {
      position: absolute;
      width:100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 0;
    }

    .bg-img1 {
      background-image: url($lib/backgroundart/steps-wave.svg);
    }
  </style>