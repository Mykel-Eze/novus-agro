<template>
    <div id="faq-page">
        <!---=== Header Section ===--->
        <TopHeader
            title="FAQ"
            description="Frequently Asked Questions about our services and operations"
            backgroundImg="faq-banner.jpg"
        />
        <!---=== end of Header Section ===--->
    
        <!---=== FAQ Section ===--->
        <FaqSection />
        <!---=== end of FAQ Section ===--->
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import FaqSection from '@/components/faqComponents/FaqSection.vue'

export default {
    name: 'FaqPage',
    components: {
        TopHeader,
        FaqSection
    },
}
</script>

<style src="@/assets/css/faq.css"></style>