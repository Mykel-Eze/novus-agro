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
        <ContactSection :contact_address_data="contact_address_data" />
        <!---=== end of Contact Section ===--->

        <!---=== Contact-Map Section ===--->
        <ContactMap />
        <!---=== end of Contact-Map Section ===--->
    </div>
</template>

<script>

import nuxtData from "../nuxt.config"

export default {
    name: 'ContactPage',
    data() {
        return {
            contact_address_data: {},
            baseURL: nuxtData.runtimeConfig.public.baseURL,
            webURL: nuxtData.runtimeConfig.public.webURL
        }
    },
    methods: {
        getContactAddresses () {
            $fetch(`${this.baseURL}contact-address-data`)
            .then((response) => {
            this.contact_address_data = response.response.data
            }).catch((error) => {
            this.errors = error
            })
        },
    },
    mounted () {
        this.getContactAddresses()
    }
}
</script>
