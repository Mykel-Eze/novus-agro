<template>
    <form id="contact-form" action="#" class="cfs-block" data-aos="fade-up" data-aos-duration="500">
        <div class="input-field">
            <label for="full_name" class="active">Full Name <sup class="red-text">*</sup></label>
            <input id="full_name" type="text" name="full_name" v-model="full_name"
                placeholder="Input your full name in here" required>
        </div>

        <div class="input-field">
            <label for="email" class="active">Email Address <sup class="red-text">*</sup></label>
            <input id="email" type="email" name="email" v-model="email" placeholder="Input your email address in here" required>
        </div>

        <div class="input-field">
            <label for="phone" class="active">Phone Number <sup class="red-text">*</sup></label>
            <input id="phone" type="tel" name="phone" v-model="phone" placeholder="Input your phone number in here" required>
        </div>

        <div class="input-field">
            <label for="message" class="active">Messages <sup class="red-text">*</sup></label>
            <textarea id="message" class="materialize-textarea" name="message" placeholder="Write your message here" required />
        </div>

        <div class="submit-btn-wrapper">
            <button class="submit-btn"> Send Messages </button>
        </div>
    </form>
</template>

<script>
import M from 'materialize-css';

export default {
    name: "ContactForm",
    data() {
        return {
            full_name: '',
            email: '',
            phone: '',
            message: '',
        }
    },
    mounted() {
        const elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
    }
}
</script>

<style></style>