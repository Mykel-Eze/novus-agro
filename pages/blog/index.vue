<template>
  <div id="blog-page">
    <!---=== Header Section ===--->
    <TopHeader
      title="Blog"
      description="Read our blog posts and articles about our services and operations"
      backgroundImg="blog-banner.jpg"
    />
    <!---=== end of Header Section ===--->

    <!---=== Blog Section ===--->
    <BlogsSection :blogs="blogs" />
    <!---=== end of Blog Section ===--->
  </div>
</template>

<script>

import nuxtData from "../nuxt.config"

export default {
  
    name: 'BlogPage',
    data () {
      return {
        errors: {},
        blogs: {},
        baseURL: nuxtData.runtimeConfig.public.baseURL,
        webURL: nuxtData.runtimeConfig.public.webURL
      }
    },
    methods: {
      async getBlogPosts () {
            await $fetch(`${this.baseURL}blog`)
            .then((response) => {
                this.blogs = response.response.data
            }).catch((error) => {
            this.errors = error
            })
      },
    },
    mounted() {
      this.getBlogPosts();
    },
}
</script>
