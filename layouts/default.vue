<template>
    <div id="app-wrapper">
        <Navbar />
        <main id="main-contents-wrapper">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'DefaultLayout',
    mounted() {
        $(window).scroll(function () {
            $('nav.main-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50)
        })
    }
}
</script>

<style>
div#app-wrapper {
    float: left;
    width: 100%;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

div#main-contents-wrapper {
    /* padding-top: 80px; */
    min-height: 60vh;
}

.modal-overlay {
    z-index: 2010 !important;
}
.modal {
    z-index: 2012 !important;
}

@media(max-width: 600px) {
    /* div#main-contents-wrapper {
    padding-top: 70px;
  } */
}
</style>