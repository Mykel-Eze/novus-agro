<template>
  <router-link :to="blogLink" class="blog-card hover-scale" data-aos="fade-up">
    <div class="blog-card-img-wrapper">
        <img :src="getImageSrc(blogImg)" :alt="blogTitle" class="blog-card-img">
    </div>
    <div class="blog-card-txt-wrapper">
        <div class="blog-date-wrapper">{{ blogDate }}</div>
        <div class="blog-card-title">{{ blogTitle }}</div>
        <div class="blog-text" ref="blogText">{{ blogText }}</div>

        <div class="read-more-btn-wrapper">Read More</div>
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
        blogDate: {
            type: String,
            required: true,
        },
    },
    methods: {
        getImageSrc(blogImg) {
            return `/other-images/${blogImg}`;
        },
    },
    mounted() {
        this.truncateBlogText();
    },
    updated() {
        this.truncateBlogText();
    },
    methods: {
        getImageSrc(blogImg) {
            return `/other-images/${blogImg}`;
        },
        truncateBlogText() {
            const blogTextElement = this.$refs.blogText;
            if (blogTextElement) {
                blogTextElement.style.webkitLineClamp = '3';
                blogTextElement.style.overflow = 'hidden';
                blogTextElement.style.textOverflow = 'ellipsis';
                blogTextElement.style.display = '-webkit-box';
                blogTextElement.style.webkitBoxOrient = 'vertical';
            }
        },
    },
}
</script>

<style scope>
.blog-card .blog-date-wrapper {
    font-size: 12px;
    margin-bottom: 10px;
}

.blog-card .blog-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.read-more-btn-wrapper {
    font-weight: bold;
}
</style>