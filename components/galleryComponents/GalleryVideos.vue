<template>
    <div class="gallery-photos-block">
        <img 
            src="@/assets/images/gallery/gallery-vid-1.jpg" 
            alt="gallery-vid"
            class="gallery-photo pointer"
            @click="openModal('https://www.youtube.com/embed/_yTWMEChGr0?si=qDW6suGsmytnm6RO')"
        >
    </div>
    <div class="gallery-photos-block">
        <img 
            src="@/assets/images/gallery/gallery-vid-2.jpg" 
            alt="gallery-vid"
            class="gallery-photo pointer"
            @click="openModal('https://www.youtube.com/embed/Juv9kGu9d1I?si=avJ990GjfO_DYIXr')"
        >
    </div>
    <div class="gallery-photos-block">
        <img 
            src="@/assets/images/gallery/gallery-vid-3.jpg" 
            alt="gallery-vid"
            class="gallery-photo pointer"
            @click="openModal('https://www.youtube.com/embed/6Pgm3-wAIF0')"
        >
    </div>
    <div class="gallery-photos-block">
        <img 
            src="@/assets/images/gallery/gallery-vid-4.jpg" 
            alt="gallery-vid"
            class="gallery-photo pointer"
            @click="openModal('https://www.youtube.com/embed/BLWxjtcx9eI')"
        >
    </div>

     <!-- The Modal -->
    <div id="videoModal" class="modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <iframe id="videoPlayer" width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    name: 'GalleryVideos',
    methods: {
        openModal(videoSrc) {
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.src = videoSrc;

            const videoModal = document.getElementById('videoModal');
            const instance = M.Modal.init(videoModal, { 
                endingTop: '15%',
                onCloseEnd: function() {
                    videoPlayer.src = '';
                }
            });
            instance.open();
        }
    }
}
</script>

<style></style>