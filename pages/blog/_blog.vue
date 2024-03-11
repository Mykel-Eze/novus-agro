<template>
    <div id="blog-post-page">
        <div class="top-bar"></div>
        <div class="row">
            <div class="container">
                <div class="blog-post-wrapper">
                    <div class="blog-post-img-wrapper">
                        <img src="/other-images/blog-img-1.jpg" alt="blog-img" class="blog-post-img">
                    </div>
                    <h2 class="section-title blog-post-title center">
                        Novus Agro launches new Grainpoint stations in Ghana
                    </h2>
                    <div class="blog-date-wrapper">12-Jan-2023</div>
                    <div class="blog-post-txt">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident unde a
                            obcaecati fuga, quibusdam voluptatibus pariatur eveniet ab quaerat ducimus eaque
                            placeat nemo molestiae iste sit optio ex odio! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Rerum provident unde a obcaecati fuga, quibusdam voluptatibus pariatur
                            eveniet ab quaerat ducimus eaque placeat nemo molestiae iste sit optio ex odio!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident unde a
                            obcaecati fuga, quibusdam voluptatibus pariatur eveniet ab quaerat ducimus eaque
                            placeat nemo molestiae iste sit optio ex odio! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Rerum provident unde a obcaecati fuga, quibusdam voluptatibus pariatur
                            eveniet ab quaerat ducimus eaque placeat nemo molestiae iste sit optio ex odio!
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident unde a
                            obcaecati fuga, quibusdam voluptatibus pariatur eveniet ab quaerat ducimus eaque
                            placeat nemo molestiae iste sit optio ex odio! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Rerum provident unde a obcaecati fuga, quibusdam voluptatibus pariatur
                            eveniet ab quaerat ducimus eaque placeat nemo molestiae iste sit optio ex odio!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident unde a
                            obcaecati fuga, quibusdam voluptatibus pariatur eveniet ab quaerat ducimus eaque
                            placeat nemo molestiae iste sit optio ex odio! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Rerum provident unde a obcaecati fuga, quibusdam voluptatibus pariatur
                            eveniet ab quaerat ducimus eaque placeat nemo molestiae iste sit optio ex odio!
                        </p>
                    </div>

                    <div class="other-blog-link center">
                        <router-link to="/blog" class="pry-color">&#8592; Back to Blog</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import nuxtData from "../nuxt.config"

export default {
    name: 'BlogPostPage',
    async asyncData ({ params }) {
        const slug = await params.blog // When calling /abc the slug will be "abc"
        return { slug }
    },
    data () {
        return {
            baseURL: nuxtData.runtimeConfig.public.baseURL,
            webURL: nuxtData.runtimeConfig.public.webURL,
            blogData: {},
            errors: {}
        }
    },
    methods: {
    async getSingleBlog () {
        await $fetch(`${this.baseURL}/blog/${this.slug}`)
        .then((response) => {
            this.blogData = response.response.data
        }).catch((error) => {
        this.errors = error
        })
    },
    formatDescription: (description) => {
      const strippedHtml = description.replace(/<[^>]+>/g, '')
      return strippedHtml
    },
    formatCreateDate: (thedate) => {
      const dt = new Date(thedate)
      return dt.toDateString()
    },
    getNewsImage (img) {
      return this.webURL + img
    }
    },
    mounted() {
        this.getSingleBlog();
    },
}
</script>

<style>

</style>