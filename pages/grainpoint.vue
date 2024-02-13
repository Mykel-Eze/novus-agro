<template>
    <div id="grainpoint-page">
        <!---=== Header Section ===--->
        <TopHeader
            title="Grainpoint"
            description="One-point shop for both point of sales for agro-inputs and point of agro-services"
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
export default {
    name: 'GrainpointPage',
}
</script>

<style src="@/assets/css/grainpoint.css"></style>
