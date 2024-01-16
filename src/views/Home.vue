<template>
  <div id="home-page">
    <!---=== Hero Section ===--->
    <HeroSection />
    <!---=== end of Hero Section ===--->

    <!---=== CommodityAggregation Section ===--->
    <CommodityAggregationSection />
    <!---=== end of CommodityAggregation Section ===--->

    <!---=== About Section ===--->
    <AboutSection />
    <!---=== end of About Section ===--->

    <!---=== What-We-Do Section ===--->
    <WhatWeDoSection />
    <!---=== end of What-We-Do Section ===--->

    <!---=== Farme-Gate-Price Section ===--->
    <FarmGatePriceSection />
    <!---=== end of Farme-Gate-Price Section ===--->

    <!---=== Partners Section ===--->
    <PartnersSection />
    <!---=== end of Partners Section ===--->
  </div>
</template>

<script>
import HeroSection from '@/components/homeComponents/HeroSection.vue'
import AboutSection from '@/components/homeComponents/AboutSection.vue'
import CommodityAggregationSection from '@/components/homeComponents/CommodityAggregationSection.vue'
import WhatWeDoSection from '@/components/homeComponents/WhatWeDoSection.vue'
import FarmGatePriceSection from '@/components/homeComponents/FarmGatePriceSection.vue'
import PartnersSection from '@/components/homeComponents/PartnersSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    AboutSection,
    CommodityAggregationSection,
    WhatWeDoSection,
    FarmGatePriceSection,
    PartnersSection
},
}
</script>

<style src="@/assets/css/home.css"></style>
