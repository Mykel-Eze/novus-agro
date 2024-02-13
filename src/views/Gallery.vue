<template>
    <div id="gallery-page">
        <!---=== Header Section ===--->
        <TopHeader
            title="Gallery"
            description="View our gallery of images and videos of our operations and services"
            backgroundImg="gallery-banner.jpg"
        />
        <!---=== end of Header Section ===--->
    
        <!---=== Gallery Section ===--->
        <GallerySection />
        <!---=== end of Gallery Section ===--->
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import GallerySection from '@/components/galleryComponents/GallerySection.vue'

export default {
    name: 'GalleryPage',
    components: {
        TopHeader,
        GallerySection
    },
}
</script>

<style src="@/assets/css/gallery.css"></style>