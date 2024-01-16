<template>
<section id="commodity-aggregation" class="logo-bg-section">
    <div class="row rel">
        <div class="container">
            <div class="ca-wrapper center">
                <h2 class="section-title">Commodity Aggregation</h2>
                <p class="section-desc-txt">
                    We are number one in collection of commodity prices across the country, we
                    facilitate the sale of commodity at <a href="#farm-gate-prices" class="text-link">farm gate prices</a>.
                </p>
            </div>
            <div class="ca-block-wrapper">
                <div class="ca-block" data-aos="fade-up" data-aos-delay="100">
                    <h2 class="ca-number">1000</h2>
                    <div class="ca-block-title">Farmers</div>
                </div>
                <div class="ca-block" data-aos="fade-up" data-aos-delay="300">
                    <h2 class="ca-number">700</h2>
                    <div class="ca-block-title">Facilitators</div>
                </div>
                <div class="ca-block" data-aos="fade-up" data-aos-delay="500">
                    <h2 class="ca-number">100</h2>
                    <div class="ca-block-title">Hectares Planted</div>
                </div>
                <div class="ca-block" data-aos="fade-up" data-aos-delay="700">
                    <h2 class="ca-number">04</h2>
                    <div class="ca-block-title">States</div>
                </div>
                <div class="ca-block" data-aos="fade-up" data-aos-delay="900">
                    <h2 class="ca-number">120</h2>
                    <div class="ca-block-title">Grainpoint Hubs</div>
                </div>
            </div>
        </div>
    </div> 
</section>
</template>

<script>
import { CountUp } from 'countup.js';

export default {
    name: 'CommodityAggregationSection',
    components: {},
    mounted() {
        this.animateNumbers();
    },
    methods: {
        animateNumbers() {
            const elements = document.querySelectorAll('.ca-number');
            elements.forEach((element) => {
                const endValue = parseInt(element.innerText, 10);
                const countUp = new CountUp(element, endValue);
                if (!countUp.error) {
                    countUp.start();
                } else {
                    console.error(countUp.error);
                }
            });
        }
    }
}
</script>

<style>

</style>