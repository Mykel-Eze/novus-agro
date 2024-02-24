<template>
   <section id="gallery">
        <div class="row">
            <div class="container">
                <div class="gallery-header-row flex-div justify-between mb-[50px]">
                    <h2 class="section-title">Gallery</h2>
                    <div class="gallery-tab-wrapper">
                        <ul class="tabs">
                            <li class="tab">
                                <a class="active" href="#photos">Photos</a>
                            </li>
                            <li class="tab">
                                <a href="#videos">Videos</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="photos" class="gallery-tab-content">
                    <div class="gallery-photos-wrapper">
                        <GalleryPhotos :galleries="galleries" />
                    </div>
                </div>
                <div id="videos" class="gallery-tab-content">
                    <div class="gallery-photos-wrapper">
                        <GalleryVideos :videos="videos" />
                    </div>
                </div>
            </div>
            </div>
        </section>
</template>

<script>
import M from 'materialize-css';
import GalleryPhotos from './GalleryPhotos.vue';
import GalleryVideos from './GalleryVideos.vue';

export default {
    name: 'GallerySection',
    components: { GalleryPhotos, GalleryVideos },
    mounted() {
        this.getGalleryItems()

        this.getVideos()

        const elemsTabs = document.querySelectorAll('.tabs')
        M.Tabs.init(elemsTabs)

        var elemsMaterialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elemsMaterialbox);

    },
    data () {
        return {
            errors: {},
            galleries: {},
            videos: {},
        }
    },
    methods: {
        async getGalleryItems () {
            await $fetch(`${this.baseURL}gallery`)
            .then((response) => {
                alert("its here")
                this.galleries = response.response.data
                console.log(this.response.response.data)
            }).catch((error) => {
            this.errors = error
            })
        },
        async getVideos () {
            await $fetch(`${this.baseURL}videos`)
            .then((response) => {
                this.videos = response.response.data
                console.log(this.response.response.data)
            }).catch((error) => {
            this.errors = error
            })
        },
    }
}
</script>

<style>

</style>