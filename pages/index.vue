<template>
  <div id="home-page">
    <!---=== Hero Section ===--->
    <HeroSection />
    <!---=== end of Hero Section ===--->

    <!---=== CommodityAggregation Section ===--->
    <CommodityAggregationSection :commodityAgres="commodityAgres" />
    <!---=== end of CommodityAggregation Section ===--->

    <!---=== About Section ===--->
    <AboutSection />
    <!---=== end of About Section ===--->

    <!---=== What-We-Do Section ===--->
    <WhatWeDoSection />
    <!---=== end of What-We-Do Section ===--->

    <!---=== Farme-Gate-Price Section ===--->
    <FarmGatePricesSection />
    <!---=== end of Farme-Gate-Price Section ===--->

    <!---=== Partners Section ===--->
    <PartnersSection />
    <!---=== end of Partners Section ===--->
  </div>
</template>

<script>
import nuxtData from "../nuxt.config"

export default {
  name: 'HomePage',
  layout: 'default',
  data () {
    return {
      errors: {},
      commodityAgres: {},
      baseURL: nuxtData.runtimeConfig.public.baseURL,
      webURL: nuxtData.runtimeConfig.public.webURL
    }
  },
  methods: {
    async getCommodityAggregation () {
        await $fetch(`${this.baseURL}numerical-information`)
        .then((response) => {
            this.commodityAgres = response.response.data
        }).catch((error) => {
        this.errors = error
        })
    },
  },
  mounted() {
    this.getCommodityAggregation()
  },
}
</script>

<!-- <style src="@/assets/css/home.css"></style> -->
