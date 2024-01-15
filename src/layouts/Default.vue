<template>
    <div id="nav">
        <NavbarComponent/>
        <div id="main-contents-wrapper">
            <RouterView />
        </div>

        <NewsletterBlock />
        <FooterComponent/>
    </div>
</template>
  
<script>
import $ from 'jquery';

import NavbarComponent from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
    name: "DefaultLayout",
    components: {
        NavbarComponent, FooterComponent
    },
    mounted() {
        $(window).scroll(function () {
            $('nav.main-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50)
        })
    }
}
</script>