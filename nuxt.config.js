// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  target: 'static',
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-swiper'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/novus-agro-icon.png' }
      ],
      title: 'Novus Agro - Taking Markets To Rural Communities',
      meta: [
        { 
          name: 'author', 
          content: 'Novus Agro' },
        {
          hid: 'description',
          name: 'description',
          content: 'Novus Agro is a platform that connects rural farmers with urban markets, enabling them to sell their produce directly.',
        },
        {
          name: 'Keywords',
          content: 'Novus Agro, rural farmers, urban markets, agriculture, produce, platform',
        },
        { name: 'theme-color', content: '#056839' },
      ],
    },
  },
  loading: {
    color: '#056839',
    height: '5px',
  },
  css: [
    'aos/dist/aos.css',
    '@/assets/css/main.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
    '@/assets/css/home.css',
    '@/assets/css/about.css',
    '@/assets/css/careers.css',
    '@/assets/css/contact.css',
    '@/assets/css/gallery.css',
    '@/assets/css/services.css',
    '@/assets/css/blog.css',
    '@/assets/css/team.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  fetch: {
    baseURL: 'http://127.0.0.1:8000/api/',
  },
  runtimeConfig: {
    public: {
      BASE_URL: 'http://127.0.0.1:8000/api/',
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   {
  //     src: '@/plugins/noty.js',
  //     mode: 'client'
  //   }
    // ,
    // {
    //   src: '@/plugins/tawk-messenger.client.js',
    //   mode: 'client'
    // }
  // ],
}
