<template>
  <!-- <router-link :to="blogLink" class="blog-card" data-aos="fade-up"> -->
  <router-link :to="`/blog/${blogSlug}`" class="blog-card" data-aos="fade-up">   
    <div class="blog-card-img-wrapper">
        <img :src="getImageSrc(blogImg)" :alt="blogTitle" class="blog-card-img">
    </div>
    <div class="blog-card-txt-wrapper">
        <div class="blog-card-title">{{ blogTitle }}</div>
        <div class="blog-text">
            {{ blogText }}
        </div>
    </div>
  </router-link>
</template>

<script>
import nuxtData from "../nuxt.config"

export default {
    name: "BlogCard",
    data () {
        return {
            webURL: nuxtData.runtimeConfig.public.webURL,
        }
    },
    props: {
        blogImg: {
            type: String,
            required: true
        },
        blogTitle: {
            type: String,
            required: true
        },
        blogText: {
            type: String,
            required: true
        },
        blogLink: {
            type: String,
            required: true,
        },
        blogSlug: {
            type: String,
            required: true,
        },
    },
    methods: {
        getImageSrc(blogImg) {
            return `${this.webURL}${blogImg}`;
        },
    }
}
</script>

<style>

</style>

