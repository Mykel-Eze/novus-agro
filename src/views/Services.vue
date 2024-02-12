<template>
  <div id="services-page">
    <!---=== Header Section ===--->
    <TopHeader
      title="Services"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic accusantium asperiores."
      backgroundImg="services-banner.jpg"
    />
    <!---=== end of Header Section ===--->

    <!---=== GrainPoint Section ===--->
    <!-- <GrainPointSection /> -->
    <!---=== end of GrainPoint Section ===--->

    <!---=== OtherServices Section ===--->
    <OtherServicesSections />
    <!---=== end of OtherServices Section ===--->

  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
// import GrainPointSection from '@/components/servicesComponents/GrainPointSection.vue'
import OtherServicesSections from '@/components/servicesComponents/OtherServicesSections.vue'

export default {
    name: "ServicesPage",
    components: {
        TopHeader,
        // GrainPointSection,
        OtherServicesSections,
    },
}
</script>

<style src="@/assets/css/services.css"></style>