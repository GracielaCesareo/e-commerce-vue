<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
    <footer class="footer text-white">
        <div class="container mx-auto grid grid-rows-3 grid-cols-2 grid-flow-row content-center gap-4">
          <div class="self-center">
            <img src="src/assets/audiophile.png" alt="">
          </div>
          <div class="flex justify-end self-center">
            <a href="" class="ml-4 uppercase">Home</a>
            <a href="" class="ml-4 uppercase">HEADPHONES</a>
            <a href="" class="ml-4 uppercase">SPEAKERS</a>
            <a href="" class="ml-4 uppercase">EARPHONES</a>
          </div>
          <div class="self-center">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </div>
          <div class="flex justify-end self-center">
            <a href="" class="ml-4">facebook</a>
            <a href="" class="ml-4">twitter</a>
            <a href="" class="ml-4">instagram</a>
          </div>
          <div class="self-center">
            Copyright 2021. All Rights Reserved
          </div>
        </div>
    </footer>

</template>

<style scoped>

</style>
