<template>
  <section id="blogs">
    <div class="row">
        <div class="container">
            <div class="blogs-wrapper">
                <template v-if="blogs.length > 0">
                    <template v-for="(blog,index) in blogs" :key="index">
                        <BlogCard 
                            :blogImg="blog.image"
                            :blogTitle="blog.title" 
                            :blogLink="blog.slug" 
                            :blogText="formatDescription(blog.description, 150)"
                        />
                    </template>
                </template>
                <!-- <BlogCard
                    blogImg="blog-img-1.jpg"
                    blogTitle="Novus Agro launches new Grainpoint stations in Ghana"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <BlogCard
                    blogImg="blog-img-2.jpg"
                    blogTitle="Ex-President of Nigeria hails Novus Agro commitment"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <BlogCard
                    blogImg="blog-img-3.jpg"
                    blogTitle="Novus Agro rewards loyal farmers"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <BlogCard
                    blogImg="team-banner-2.jpg"
                    blogTitle="Lorem ipsum dolor"
                    blogText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                    ipsam quis, et eum doloribus dolorem alias minus sequi cum officia natus ea
                    repudiandae sint quas ipsa, dolore iste voluptatem labore!"
                />
                <BlogCard
                    blogImg="blog-img-1.jpg"
                    blogTitle="Novus Agro launches new Grainpoint stations in Ghana"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <BlogCard
                    blogImg="blog-img-2.jpg"
                    blogTitle="Ex-President of Nigeria hails Novus Agro commitment"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <BlogCard
                    blogImg="blog-img-3.jpg"
                    blogTitle="Novus Agro rewards loyal farmers"
                    blogText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                /> -->
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/blogComponents/BlogCard.vue'

export default {
    name: "BlogsSection",
    props: {
      blogs: {
      type: [Object, Array],
      required: true
    }
    },
    methods: {
    formatDescription: (description, number) => {
      const strippedHtml = description.toString().replace(/<[^>]+>/g, '')
      const descString = strippedHtml.split('').slice(0, number).join('')
      return descString + '... '
    },
    formatCreateDate: (thedate) => {
      const dt = new Date(thedate)
      return dt.toDateString()
    },
    },
    components: {
        BlogCard
    },
}
</script>

<style>

</style>