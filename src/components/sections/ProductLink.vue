<script setup>
//Icons
import { ChevronRightIcon } from "@heroicons/vue/24/outline"

import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
    <div class="grid grid-cols-3 gap-3">

        <div class="product-link-card flex flex-col justify-center items-center relative">
            <img src="src/assets/headphones.png" alt="" class="absolute top-12">
            <div class="h-52 bg-slate-300 rounded w-full flex flex-col justify-center items-center mt-6">
                <p class="uppercase m-4 font-bold">Headphones</p>
                <a href="#" class="uppercase">
                shop
                <ChevronRightIcon size="16" class="custom-class h-3.5 w-3.5"/>
                </a>
            </div>
        </div>

        <div class="product-link-card flex flex-col justify-center items-center relative">
            <img src="src/assets/speakers.png" alt="" class="absolute top-12">
            <div class="h-52 bg-slate-300 rounded w-full flex flex-col justify-center items-center mt-6">
                <p class="uppercase m-4 font-bold">Speakers</p>
                <a href="#" class="uppercase">shop
                    <ChevronRightIcon size="16" class="custom-class h-3.5 w-3.5"/>
                </a>
                
            </div>
        </div>

        <div class="product-link-card flex flex-col justify-center items-center relative">
        <img src="src/assets/earphones.png" alt="" class="absolute top-12">
        <div class="h-52 bg-slate-300 rounded w-full flex flex-col justify-center items-center mt-6">
            <p class="uppercase m-4 font-bold">Earphones</p>
            <a href="#" class="uppercase">shop
                    <ChevronRightIcon size="16" class="custom-class h-3.5 w-3.5"/>
                </a>
        </div>
        </div>

    </div>

</template>

<style scoped lang="scss">
    .product-link-card{
    height: 500px;
    }
</style>
