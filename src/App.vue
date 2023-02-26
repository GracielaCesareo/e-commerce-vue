<script setup>
import Navbar from './components/common/Navbar.vue';
import Hero from './components/sections/Hero.vue';
import ProductLink from './components/sections/ProductLink.vue';
import ProductPromo from './components/sections/ProductPromo.vue';
import StorePromo from './components/sections/StorePromo.vue';
import Footer from './components/common/Footer.vue'



</script>

<template>

  <div class="">
    <Navbar/>
    <Hero />

    <section class="container mx-auto">

      <ProductLink />

      <ProductPromo/>

      <StorePromo/>
      
    </section>

    <Footer/>
  </div>



</template>

<style scoped lang="scss">
#hero-section{
  background-color: #131313;
}
.footer{
  background-color: #131313;
}
</style>
