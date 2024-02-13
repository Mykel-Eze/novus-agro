<template>
  <div id="services-page">
    <!---=== Header Section ===--->
    <TopHeader
      title="Services"
      description="We organize farmers into accessible groups for all stakeholders"
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
export default {
    name: "ServicesPage",
}
</script>

<style src="@/assets/css/services.css"></style>