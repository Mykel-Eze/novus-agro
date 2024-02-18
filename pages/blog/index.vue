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
export default {
    name: 'BlogPage',
    data () {
      return {
        errors: {},
        blogs: {},
      }
    },
    methods: {
      async getBlogPosts (context) {
            await $fetch('http://127.0.0.1:8000/api/blog')
            .then((response) => {
                this.blogs = response.response.data
                console.log(this.blogs)
            }).catch((error) => {
            this.errors = error
            })
        },
    },
    mounted() {
      this.getBlogPosts()
    },
}
</script>
