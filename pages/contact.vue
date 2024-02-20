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

const nuxtData = require('../../nuxt.config')

export default {
    name: 'ContactPage',
    data() {
        return {
            contact_address_data: {},
            webURL: 'http://127.0.0.1:8000',
            baseURL: 'http://127.0.0.1:8000/api/',
            webURL: nuxtData.default.runtimeConfig.public.webURL
        }
    },
    methods: {
        getContactAddresses () {
            // $fetch('http://127.0.0.1:8000/api/contact-address-data')
            $fetch(`${this.baseURL}contact-address-data`)
            .then((response) => {
            this.contact_address_data = response.response.data
            }).catch((error) => {
            this.errors = error
            })
        },
    },
    mounted () {
        console.log("contact paged detail")
        this.getContactAddresses()
    }
}
</script>
