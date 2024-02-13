<template>
    <div id="contact-page">
        <!---=== Header Section ===--->
        <TopHeader
        title="Contact Us"
        description=""
        backgroundImg="contact-banner.jpg"
        />
        <!---=== end of Header Section ===--->

        <!---=== Contact Section ===--->
        <ContactSection />
        <!---=== end of Contact Section ===--->

        <!---=== Contact-Map Section ===--->
        <ContactMap />
        <!---=== end of Contact-Map Section ===--->
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import ContactSection from '@/components/contactComponents/ContactSection.vue'
import ContactMap from '@/components/contactComponents/ContactMap.vue'

export default {
    name: 'ContactPage',
    components: {
        TopHeader,
        ContactSection,
        ContactMap,
    },
}
</script>

<style src="@/assets/css/contact.css"></style>
