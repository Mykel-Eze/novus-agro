<template>
    <form id="contact-form" @submit.prevent="submitForm" class="cfs-block" data-aos="fade-up" data-aos-duration="500">
        <div class="input-field">
            <label for="full_name" class="active">Full Name <sup class="red-text">*</sup></label>
            <input id="full_name" type="text" name="full_name" v-model="theformdata.name"
                placeholder="Input your full name in here" required>
        </div>

        <div class="input-field">
            <label for="email" class="active">Email Address <sup class="red-text">*</sup></label>
            <input id="email" type="email" name="email" v-model="theformdata.email" placeholder="Input your email address in here" required>
        </div>

        <div class="input-field">
            <label for="phone" class="active">Phone Number <sup class="red-text">*</sup></label>
            <input id="phone" type="tel" name="phone" v-model="theformdata.phone" placeholder="Input your phone number in here" required>
        </div>

        <div class="input-field">
            <label for="message" class="active">Messages <sup class="red-text">*</sup></label>
            <textarea id="message" v-model="theformdata.message" class="materialize-textarea" name="message" placeholder="Write your message here" required />
        </div>

        <div class="submit-btn-wrapper">
            <button class="submit-btn"> Send Messages </button>
        </div>
    </form>
</template>

<script>
import M from 'materialize-css';
import { baseURL } from '~/node_modules/nuxt/dist/core/runtime/nitro/paths';

export default {
    name: "ContactForm",
    data() {
        return {
            theformdata: {
            name: '',
            email: '',
            phone: '',
            type: 'contact',
            message: ''
            },
            errors: {},
            categories: {},
            contact_address_data: {},
            webURL : 'http://127.0.0.1:8000',
            baseURL : 'http://127.0.0.1:8000/api/'
        }
    },
    methods: {
        async  submitForm() {
        const formdata = this.theformdata
        const todo = await $fetch('http://127.0.0.1:8000/api/save-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formdata
            }).then((resp) => {
                alert('successfully')
                // this.$noty.success('Your message has been sent sucessfully!')
                this.theformdata = {}
                this.theformdata.type = 'contact'
                }).catch((error) => {
                this.errors = error
                })
            },
    },
    mounted() {
        console.log("mounted one");
        const elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
    }
}
</script>

<style></style>