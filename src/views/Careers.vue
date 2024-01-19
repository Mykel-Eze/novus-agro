<template>
    <div id="careers-page">
        <!---=== Header Section ===--->
        <TopHeader
            title="Careers"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic accusantium asperiores."
            backgroundImg="careers-banner.jpg"
        />
        <!---=== end of Header Section ===--->

        <!---=== Careers-Section ===--->
        <CareersSection />
        <!---=== end of Careers-Section ===--->
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import CareersSection from '@/components/careersComponents/CareersSection.vue'

export default {
    name: 'CareersPage',
    components: {
        TopHeader,
        CareersSection
    }
}
</script>

<style src="@/assets/css/careers.css"></style>