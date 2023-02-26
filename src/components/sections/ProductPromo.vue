<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>

    <section class="product-promo">
        <div class="info-text-left flex justify-end items-center m-10 rounded-md">
          <div class="w-1/2 text-white px-24">
            <h3 class="uppercase text-5xl  font-bold mb-6">ZX9 SPEAKER</h3>
            <p class="mb-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">See Product</button>
          </div>
        </div>

        <div class="info-text-right flex justify-start items-center m-10 rounded-md">
          <div class="w-1/2 px-24">
            <h3 class="uppercase text-5xl font-bold">ZX9 SPEAKER</h3>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">See Product</button>
          </div>
        </div>

        <div class="info-text grid grid-cols-2 gap-x-8">
          <div class="">
            <img src="src/assets/earphones-promo.png" alt="">
          </div>
          <div class=" px-24 left-wrapper flex flex-col items-center rounded-md">
            <h3 class="uppercase text-5xl font-bold">ZX9 SPEAKER</h3>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">See Product</button>
          </div>
        </div>
      </section>

</template>

<style scoped lang="scss">

.product-promo{
  .info-text-left{
    min-height: 560px;
    background-color: #D87D4A;
    background-image: url('src/assets/speakers-promo.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0%;
  }
  .info-text-right{
    min-height: 320px;
    background-color: #D1D1D1;
    background-image: url('src/assets/speakers-promo2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0%;
  }

  .info-text{
    .left-wrapper{
      min-height: 292px;
      background-color: #D1D1D1;
    }
  }
}

</style>
