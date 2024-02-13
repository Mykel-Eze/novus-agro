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
                                <div class="cds-info-row flex-div">
                                    <img src="@/assets/images/location-icon.svg" alt="location" class="cds-info-img">
                                    <a class="cds-info-link">
                                        <b>Operational Office Address:</b> No 5a Craig Street, Ogudu GRA, Lagos, Nigeria.
                                    </a>
                                </div>
                                <div class="cds-info-row flex-div">
                                    <img src="@/assets/images/call-icon.svg" alt="call" class="cds-info-img">
                                    <a href="tel:+2348139466737" class="cds-info-link">+234 813 946 6737</a>
                                </div>
                                <div class="cds-info-row flex-div">
                                    <img src="@/assets/images/mail-icon-2.svg" alt="call" class="cds-info-img">
                                    <a href="mailto:info@novusagro.com"
                                        class="cds-info-link">info@novusagro.com</a>
                                </div>
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
    components: {
        ContactForm
    },
}
</script>

<style></style>