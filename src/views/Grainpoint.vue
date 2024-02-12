<template>
    <div id="grainpoint-page">
        <!---=== Header Section ===--->
        <TopHeader
            title="Grainpoint"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic accusantium asperiores."
            backgroundImg="grainpoint-banner.jpeg"
        />
        <!---=== end of Header Section ===--->

        <!---=== Overview Section ===--->
        <GrainpointOverviewSection />
        <!---=== end of Overview Section ===--->

        <!---=== GrainPoint-Map Section ===--->
        <section id="grainpoint-map">
            <div class="row">
                <div class="container">
                    <GrainpointMap />
                </div>
            </div>
        </section>
        <!---=== end of GrainPoint-Map Section ===--->

        <!---=== GrainPoint-Impact Section ===--->
        <GrainpointImpactSection />
        <!---=== end of GrainPoint-Impact Section ===--->

        <!---=== GrainPoint-Pictures Section ===--->
        <GrainpointPicturesSection />
        <!---=== end of GrainPoint-Pictures Section ===--->

        <!---=== GrainPoint-Videos Section ===--->
        <GrainpointVideosSection />
        <!---=== end of GrainPoint-Videos Section ===--->
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import GrainpointMap from '@/components/GrainpointMap.vue'
import GrainpointOverviewSection from '@/components/grainpointComponents/GrainpointOverviewSection.vue'
import GrainpointImpactSection from '@/components/grainpointComponents/GrainpointImpactSection.vue'
import GrainpointPicturesSection from '@/components/grainpointComponents/GrainpointPicturesSection.vue'
import GrainpointVideosSection from '@/components/grainpointComponents/GrainpointVideosSection.vue'

export default {
    name: 'GrainpointPage',
    components: {
        TopHeader,
        GrainpointMap,
        GrainpointOverviewSection,
        GrainpointImpactSection,
        GrainpointPicturesSection,
        GrainpointVideosSection,
    },
}
</script>

<style src="@/assets/css/grainpoint.css"></style>
