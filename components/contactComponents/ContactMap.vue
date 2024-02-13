<template>
    <section id="contact-map">
        <div class="row">
            <div class="container">
                <div class="mapouter">
                    <div class="gmap_canvas" data-aos="fade-up">
                        <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=No%205a%20Craig%20Street,%20Ogudu%20GRA,%20Lagos,Nigeria.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactMap',
};
</script>

<style>
    section#contact-map {
        padding-bottom: 70px;
    }
    .mapouter {
        position: relative;
        height: 400px;
        width: 100%;
    }
    .gmap_canvas {
        overflow:hidden;
        background: var(--pry-color);
        height:400px;
        width:100%;
        border-radius: 50px;
    }
</style>
