<template>
    <section id="grainpoint-videos">
        <div class="row">
            <div class="container">
                <h2 class="section-title center">
                    Success Stories
                </h2>

                <div class="grainpoints-media-wrapper">
                    <div 
                        class="gallery-photos-block pointer" 
                        data-aos="fade-up" 
                        @click="openModal('https://www.youtube.com/embed/mkGB-DYTzTw?si=eVd9fnOLT0Rcp_Un')"
                    >
                        <img  src="@/assets/images/Video1.png"  alt="gallery-vid" class="gallery-photo">
                        <img src="@/assets/images/play.svg" alt="play" class="play-icon">
                    </div>

                    <div 
                        class="gallery-photos-block pointer" 
                        data-aos="fade-up" 
                        @click="openModal('https://www.youtube.com/embed/U3TbLOPYN88?si=CCixxtZpJsTWDJPk')"
                    >
                        <img  src="@/assets/images/Video2.png"  alt="gallery-vid" class="gallery-photo">
                        <img src="@/assets/images/play.svg" alt="play" class="play-icon">
                    </div>

                    <div 
                        class="gallery-photos-block pointer" 
                        data-aos="fade-up" 
                        @click="openModal('https://www.youtube.com/embed/C2Dwu2kS4lU?si=3zcWPbgQydhQNATv')"
                    >
                        <img  src="@/assets/images/Video3.png"  alt="gallery-vid" class="gallery-photo pointer">
                        <img src="@/assets/images/play.svg" alt="play" class="play-icon">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- The Modal -->
    <div id="grainpointVideoModal" class="modal">
        <img src="@/assets/images/close.svg" alt="close" class="modal-close">
        <div class="modal-content">
            <iframe id="gpVideoPlayer" width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    name: "GrainpointVideosSection",
    methods: {
        openModal(videoSrc) {
            const videoPlayer = document.getElementById('gpVideoPlayer');
            videoPlayer.src = videoSrc;

            const videoModal = document.getElementById('grainpointVideoModal');
            const instance = M.Modal.init(videoModal, {
                endingTop: '15%',
                onCloseEnd: function () {
                    videoPlayer.src = '';
                }
            });
            instance.open();
        }
    }
}
</script>

<style></style>