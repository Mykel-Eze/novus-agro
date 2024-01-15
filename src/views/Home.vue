<template>
  <div id="home-page">
    <!---=== Hero Section ===--->
    <HeroSection />
    <!---=== end of Hero Section ===--->
  </div>
</template>

<script>
import HeroSection from '@/components/homeComponents/HeroSection.vue'

export default {
  name: 'HomePage',
  components: { HeroSection },
}
</script>

<style src="@/assets/css/home.css"></style>
