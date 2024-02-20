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
            <div class="ca-block-wrapper" data-aos="fade-up">
                <div class="ca-block">
                    <h2 class="ca-number">71720</h2>
                    <div class="ca-block-title">Farmers</div>
                </div>
                <div class="ca-block">
                    <h2 class="ca-number">206</h2>
                    <div class="ca-block-title">Facilitators</div>
                </div>
                <div class="ca-block">
                    <h2 class="ca-number">7150</h2>
                    <div class="ca-block-title">Hectares Planted</div>
                </div>
                <div class="ca-block">
                    <h2 class="ca-number">21</h2>
                    <div class="ca-block-title">States</div>
                </div>
                <div class="ca-block">
                    <h2 class="ca-number">1016</h2>
                    <div class="ca-block-title">Grainpoint Hubs</div>
                </div>
            </div>
        </div>
    </div> 
</section>
</template>

<script>
import $ from "jquery"

export default {
    name: 'CommodityAggregationSection',
    components: {},
    mounted() {
        this.observeSection();
    },
    methods: {
        // animateNumbers() {
        //     $('.ca-number').each(function () {
        //         $(this).prop('Counter', 0).animate({
        //             Counter: $(this).text()
        //         }, {
        //             duration: 4000,
        //             easing: 'swing',
        //             step: function (now) {
        //                 $(this).text(Math.ceil(now).toLocaleString('en-US'));
        //             }
        //         });
        //     });
        // },
        observeSection() {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateNumbers();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(document.querySelector('#commodity-aggregation'));
        }
    }
}
</script>

<style>

</style>