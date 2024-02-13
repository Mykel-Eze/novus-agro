<template>
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" :fill="fillColor" d="M16.168 12.6488C16.385 12.8712 16.3806 13.2272 16.1583 13.4442L10.3533 19.1081C10.131 19.3251 9.77488 19.3207 9.55793 19.0984L9.29601 18.8299C9.07905 18.6076 9.08342 18.2515 9.30578 18.0345L14.4397 13.0253L9.43047 7.89141C9.21352 7.66905 9.21789 7.31298 9.44025 7.09602L9.70869 6.8341C9.93105 6.61714 10.2871 6.62152 10.5041 6.84388L16.168 12.6488Z" />
    </svg>
</template>

<script>
export default {
    name: 'RightChevron',
    props: {
        fillColor: {
            type: String,
            default: '#ffffff',
        },
    },
}
</script>

<style>

</style>