<template>
  <section id="blogs">
    <div class="row">
        <div class="container">
            <div class="blogs-wrapper">
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
                />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/blogComponents/BlogCard.vue'

export default {
    name: "BlogsSection",
    components: {
        BlogCard
    },
}
</script>

<style>

</style>