<template>
    <section id="hero">
        <div class="swiper-container">
            <swiper 
                :loop="true"
                :pagination="{ clickable: true, }"
                :navigation="true"
                :modules="modules" 
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="container full-height">
                        <div class="slider-content-wrapper center">
                            <h1 class="slider-title">
                                Organize Smallholder Farmers
                            </h1>
                            <p class="slider-text">
                                We use technology and a trained network of community-based field Managers, and
                                we profile and verify smallholder farmers.
                            </p>
                            <router-link to="/contact" className="slider-btn hover-scale">
                                <span>Join Us</span>
                                <RightChevron fillColor="var(--pry-color)" />
                            </router-link>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="container full-height">
                        <div class="slider-content-wrapper center">
                            <h1 class="slider-title">
                                Facilitating Inputs
                            </h1>
                            <p class="slider-text">
                                Novus Agro identifies value chain specific best input for your planting program.
                            </p>
                            <router-link to="/contact" className="slider-btn hover-scale">
                                <span>Join Us</span>
                                <RightChevron fillColor="var(--pry-color)" />
                            </router-link>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="container full-height">
                        <div class="slider-content-wrapper center">
                            <h1 class="slider-title">
                                Financial Services
                            </h1>
                            <p class="slider-text">
                                We partner with fin-tech companies to provide financial services to farmers
                                in rural areas to bridge the financial inclusion gap.
                            </p>
                            <router-link to="/contact" className="slider-btn hover-scale">
                                <span>Join Us</span>
                                <RightChevron fillColor="var(--pry-color)" />
                            </router-link>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="container full-height">
                        <div class="slider-content-wrapper center">
                            <h1 class="slider-title">
                                Facilitating Credit
                            </h1>
                            <p class="slider-text">
                                Novus Agro works in partnership with lenders (Banks, Investors etc)
                                processors, input providers and other key stakeholders to design and
                                implement sustainable out-grower schemes across value chains.
                            </p>
                            <router-link to="/contact" className="slider-btn hover-scale">
                                <span>Join Us</span>
                                <RightChevron fillColor="var(--pry-color)" />
                            </router-link>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="container full-height">
                        <div class="slider-content-wrapper center">
                            <h1 class="slider-title">
                                Knowledge Support
                            </h1>
                            <p class="slider-text">
                                Our facilitators act as para extension agents trained by input suppliers
                                to provide a reference knowledge base and critical support in good
                                agricultural practices.
                            </p>
                            <router-link to="/contact" className="slider-btn hover-scale">
                                <span>Join Us</span>
                                <RightChevron fillColor="var(--pry-color)" />
                            </router-link>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <video autoplay loop muted>
            <source src="@/assets/hero-video.mp4" type="video/mp4">
        </video>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import RightChevron from '@/components/icons/RightChevron.vue';

export default {
    name: 'HeroSection',
    components: {
        Swiper,
        SwiperSlide,
        RightChevron
    },
    setup() {
        return {
            modules: [ Pagination, Navigation ],
        };
    },
};
</script>

<style>
.swiper-button-prev:after, .swiper-button-next:after {
    color: var(--lite-color);
}

@media(max-width: 992px) {
    .swiper-button-prev:after, .swiper-button-next:after {
        display: none;
    }
}
</style>