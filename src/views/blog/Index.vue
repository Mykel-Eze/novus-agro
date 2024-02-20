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
    <!-- <BlogsSection /> -->
    <!---=== end of Blog Section ===--->
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import BlogsSection from '@/components/blogComponents/BlogsSection.vue'

export default {
    name: 'BlogPage',
    components: {
        TopHeader,
        BlogsSection
    },
}
</script>

<style src="@/assets/css/blog.css"></style>