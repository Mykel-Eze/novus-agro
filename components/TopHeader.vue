<template>
  <header id="top-section" :style="{ backgroundImage: 'url(' + getBackgroundSrc(backgroundImg) + ')' }">
    <div class="row relative full-height">
        <div class="container full-height">
            <div class="header-content-wrapper">
                <h1 class="page-title">{{ title }}</h1>
                <div class="page-title-desc">{{ description }}</div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "TopHeader",
    props: {
        title: {
            type: String,
            default: "Novus Agro"
        },
        description: {
            type: String,
        },
        backgroundImg: {
            type: String,
        },
    },
    methods: {
        getBackgroundSrc(backgroundImg) {
            return `/other-images/${backgroundImg}`;
        },
    }
}
</script>

<style>
header#top-section {
    position: relative;
    padding: 15px 0;
    min-height: 420px;
    height: 50vh;
    color: white;
    background-size: cover;
    background-position: center;
}
header#top-section::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(5, 104, 57, 0.8);
}
.header-content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    margin: auto;
}
h1.page-title {
    margin: 0;
    font-size: 64px;
    letter-spacing: -1px;
    font-family: var(--font-2-bold);
    margin-bottom: 10px;
}
.page-title-desc {
    margin: 0;
    font-size: 20px;
    font-family: var(--font-2);
}
</style>