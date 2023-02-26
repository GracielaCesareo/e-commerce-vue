<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>

    <section class="store-promo flex justify-center items-center m-24">
        <div class="w-1/2">
          <h3 class="uppercase text-5xl font-bold mb-6">Bringing you the <span class="text-orange-300">best</span>  audio gear</h3>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div class="w-1/2">
          <img src="src/assets/store-promo.png" alt="">
        </div>
    </section>


</template>

<style scoped>

</style>
