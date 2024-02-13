<template>
  <div id="about-page">
    <!---=== Header Section ===--->
    <TopHeader
      title="About Us"
      description="Novus Agro is a trade facilitation and service provision company"
      backgroundImg="about-banner.jpg"
    />
    <!---=== end of Header Section ===--->

    <!---=== Text-And-Video Section ===--->
    <AboutTextVideoSection />
    <!---=== end of Text-And-Video Section ===--->

    <!---=== Who-We-Are Section ===--->
    <WhoWeAreSection />
    <!---=== end of Who-We-Are Section ===--->

    <!---=== Mission-Vision Section ===--->
    <MissionVisionSection />
    <!---=== end of Mission-Vision Section ===--->

    <!---=== Positioning-Statement Section ===--->
    <PositioningStatementSection />
    <!---=== end of Positioning-Statement Section ===--->
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import AboutTextVideoSection from '@/components/aboutComponents/AboutTextVideoSection.vue'
import MissionVisionSection from '@/components/aboutComponents/MissionVisionSection.vue';
import WhoWeAreSection from '@/components/aboutComponents/WhoWeAreSection.vue'
import PositioningStatementSection from '@/components/aboutComponents/PositioningStatementSection.vue';

export default {
  name: 'AboutPage',
  components: {
    TopHeader,
    AboutTextVideoSection,
    WhoWeAreSection,
    MissionVisionSection,
    PositioningStatementSection
},
}
</script>

<style src="@/assets/css/about.css"></style>
