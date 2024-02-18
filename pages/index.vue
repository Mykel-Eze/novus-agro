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
export default {
  name: 'HomePage',
  layout: 'default',
  data () {
    return {
      errors: {},
      commodityAgres: {},
      webURL : 'http://127.0.0.1:8000',
      baseURL : 'http://127.0.0.1:8000/api/'
    }
  },
  methods: {
    async getCommodityAggregation () {
        await $fetch(`${this.baseURL}numerical-information`)
        .then((response) => {
            this.commodityAgres = response.response.data
            console.log(response.response)
        }).catch((error) => {
        this.errors = error
        })
    },
  },
  mounted() {
    console.log("home comp 1")
    this.getCommodityAggregation();
    console.log("home comp")
  },
}
</script>

<!-- <style src="@/assets/css/home.css"></style> -->
