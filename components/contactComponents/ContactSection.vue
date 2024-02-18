<template>
    <section id="contact-section">
        <div class="row">
            <div class="container">
                <div class="contact-content-wrapper">
                    <div class="contact-form-side">
                        <div class="contact-form-header">
                            <div class="contact-form-title">Contact Form</div>
                        </div>
                        <ContactForm />
                    </div>
                    <div class="contact-details-side">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div class="cds-header">
                                <div class="cds-title">Contact us</div>
                                <div class="cds-desc">
                                   <p>
                                    Our lines are instant and always open within the time of work.
                                   </p>
                                   <b>
                                    9:00am - 5:00pm <br>
                                    Mondays - Fridays
                                   </b>
                                </div>
                            </div>

                            <div class="cds-info">
                                <div class="cds-info-title">
                                    Contact Info
                                </div>
                                <template v-if="contact_address_data.length > 0">
                                    <template v-for="(contact, index) in contact_address_data" :key="index">
                                        <div class="cds-info-row flex-div">
                                            <img src="@/assets/images/location-icon.svg" alt="location" class="cds-info-img">
                                            <a class="cds-info-link">
                                                <b> {{ contact.title }} :</b> {{ contact.address }}
                                            </a>
                                        </div>
                                        <div class="cds-info-row flex-div">
                                            <img src="@/assets/images/call-icon.svg" alt="call" class="cds-info-img">
                                            <a :href="'tel:'+ contact.telephone"   class="cds-info-link"> {{ contact.telephone }}</a>
                                        </div>
                                        <div class="cds-info-row flex-div">
                                            <img src="@/assets/images/mail-icon-2.svg" alt="call" class="cds-info-img">
                                            <a  :href="'mailto:' +  contact.email  "
                                                class="cds-info-link"> {{ contact.email }} </a>
                                        </div>
                                    </template>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
    name: 'ContactSection',
    props: {
      contact_address_data: {
      type: [Object, Array],
      required: true
    }
    },
    components: {
        ContactForm
    },
}
</script>

<style></style>