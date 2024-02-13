<template>
  <section id="grainpoint">
    <div class="row">
        <div class="container">
            <div class="grade-point-wrapper">
                <h2 class="section-title center">Grainpoint</h2>
                <div class="section-desc-txt center">
                    <p>
                        Our most recent product seeks to address market access, making farming communities
                        more accessible to any stakeholder who wants to transact with them. 
                        We have over 700 mini aggregation centers across Nigeria where our outlet mangers
                        have been strategically positioned to interact with farmers while offering products
                        and services such as commodity aggregation, input sales, financial services and
                        retail points for FMCGs.
                    </p>
                </div>
            </div>
            <div class="grade-point-location-wrapper mt-[50px]">
                <h4 class="section-sub-title center">Grainpoint Locations</h4>
                <div class="mt-[50px]" data-aos="fade-up">
                    <GrainpointMap />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import GrainpointMap from '@/components/GrainpointMap.vue'

export default {
    name: "GrainPointSection",
    components: {
        GrainpointMap
    },
}
</script>

<style>

</style>