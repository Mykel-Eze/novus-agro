<template>
    <section id="grainpoint-pictures">
        <div class="row">
            <div class="container">
                <h2 class="section-title center">
                    GrainPoint Through Pictures
                </h2>

                <div class="grainpoints-media-wrapper">
                    <div class="gallery-photos-block">
                        <img src="@/assets/images/Picture1.png" alt="grainpoint-img" class="gallery-photo materialboxed">
                    </div>
                    <div class="gallery-photos-block">
                        <img src="@/assets/images/Picture2.png" alt="grainpoint-img" class="gallery-photo materialboxed">
                    </div>
                    <div class="gallery-photos-block">
                        <img src="@/assets/images/Picture3.png" alt="grainpoint-img" class="gallery-photo materialboxed">
                    </div>
                    <div class="gallery-photos-block">
                        <img src="@/assets/images/Picture4.png" alt="grainpoint-img" class="gallery-photo materialboxed">
                    </div>
                    <div class="gallery-photos-block">
                        <img src="@/assets/images/Picture5.png" alt="grainpoint-img" class="gallery-photo materialboxed">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import M from 'materialize-css';

export default {
    name: "GrainpointPicturesSection",
    mounted() {
        var elemsMaterialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elemsMaterialbox);
    },
}
</script>

<style>

</style>