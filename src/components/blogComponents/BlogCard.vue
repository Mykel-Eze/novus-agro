<template>
  <router-link :to="blogLink" class="blog-card" data-aos="fade-up">
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
export default {
    name: "BlogCard",
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
            default: '/blog/post',
            required: true,
        },
    },
    methods: {
        getImageSrc(blogImg) {
            return `/other-images/${blogImg}`;
        },
    }
}
</script>

<style>

</style>