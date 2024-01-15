<template>
    <div id="nav-wrapper">
        <!---=== Add .nav-2 to give it a white-background mode ===--->
        <nav class="main-nav">
            <div class="container full-height">
                <div class="nav-wrapper">
                    <router-link to="/" class="brand-logo" @click="scrollToTop()">
                        <img src="@/assets/images/novus-agro.png" alt="novus-agro" class="logo">
                    </router-link>

                    <ul id="nav-mobile-2" class="dn-mobile ul-nav">
                        <li>
                            <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                                <MenuIcon />
                            </a>
                        </li>
                    </ul>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <router-link to="/" @click="scrollToTop()">
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#!" class="dropdown-trigger flex-div" data-target="company-dropdown" @click="scrollToTop()">
                                <span>Company</span>
                                <ArrowDownIcon />
                            </a>

                            <!-- Dropdown Structure -->
                            <ul id='company-dropdown' class='dropdown-content'>
                                <li>
                                    <router-link to="/about">About Us</router-link>
                                </li>
                                <li>
                                    <router-link to="/faq">FAQ</router-link>
                                </li>
                                <li>
                                    <router-link to="/team">Our Team</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/services" @click="scrollToTop()">
                                <span>Our Services</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/career" @click="scrollToTop()">
                                <span>Careers</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#!" class="dropdown-trigger flex-div" data-target="media-dropdown" @click="scrollToTop()">
                                <span>Media</span>
                                <ArrowDownIcon />
                            </a>

                            <!-- Dropdown Structure -->
                            <ul id='media-dropdown' class='dropdown-content'>
                                <li>
                                    <router-link to="/gallery">Gallery</router-link>
                                </li>
                                <li>
                                    <router-link to="/blog">Blog</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/contact" @click="scrollToTop()">
                                <span>Contact Us</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            <div class="sidenav-logo">
                <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                    <img src="@/assets/images/novus-agro.png" alt="Novus Agro" class="logo">
                </router-link>
            </div>
            <ul class="sidenav-flex">
                <li>
                    <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                        <span>Home</span>
                    </router-link>
                </li>
                <li>
                    <ul class="collapsible">
                        <li>
                            <div class="collapsible-header">
                                <a class="flex-div">
                                    <span>Company</span>
                                    <ArrowDownIcon />
                                </a>
                            </div>
                            <div class="collapsible-body">
                                <ul id="company-dropdown-2">
                                    <li>
                                        <router-link to="/about" class="sidenav-close">About Us</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/faq" class="sidenav-close">FAQ</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/team" class="sidenav-close">Our Team</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/services" class="sidenav-close" @click="scrollToTop()">
                        <span>Our Services</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/career" class="sidenav-close" @click="scrollToTop()">
                        <span>Careers</span>
                    </router-link>
                </li>
                <li>
                    <ul class="collapsible">
                        <li>
                            <div class="collapsible-header">
                                <a class="flex-div">
                                    <span>Media</span>
                                    <ArrowDownIcon />
                                </a>
                            </div>
                            <div class="collapsible-body">
                                <ul id="media-dropdown-2">
                                    <li>
                                        <router-link to="/gallery" class="sidenav-close">Gallery</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/blog" class="sidenav-close">Blog</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/contact" class="sidenav-close" @click="scrollToTop()">
                        <span>Contact Us</span>
                    </router-link>
                </li>
            </ul>
            <!-- <div class="sidenav-footer">
                <div class="footer-social-wrapper">
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/images/twitter.svg" alt="twitter" class="social-icons">
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/images/instagram.svg" alt="instagram" class="social-icons">
                    </a>
                    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/images/linkedin.svg" alt="linkedin" class="social-icons">
                    </a>
                </div>
            </div> -->
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css';

import ArrowDownIcon from './icons/ArrowDownIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';

export default {
    name: 'NavbarComponent',
    components: {
        ArrowDownIcon, MenuIcon
    },
    mounted() {
        const elemsSidenav = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elemsSidenav)

        const elemsScrollspy = document.querySelectorAll('.scrollspy')
        M.ScrollSpy.init(elemsScrollspy)

        const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            // coverTrigger: false,
            hover: true,
        });

        const elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style scoped src="@/assets/css/navbar.css"></style>

<style>
    nav.main-nav.scrolled-nav ul>li>a svg path, 
    nav.main-nav.nav-2 ul>li>a svg path {
        stroke: #1A242D;
    }
    nav.main-nav.scrolled-nav ul>li>a:hover svg path {
        stroke: var(--pry-color);
    }
    nav.main-nav .sidenav-trigger svg {
        position: relative;
        top: 4px;
    }
    .sidenav svg path {
        stroke: #1A242D;
    }
</style>
