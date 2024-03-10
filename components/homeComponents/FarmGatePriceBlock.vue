<template>
    <div class="price-block" :class="extraClass">
        <div class="price-item-name">
            <img :src="getPhoto(itemIcon)" :alt="itemName" class="item-img">
            <span>{{ itemName }}</span>
        </div>
        <div class="price-item-bar flex-div gap-[15px]">
            <div class="price-bar" :style="{ maxWidth: getBarWidth(itemPrice), backgroundColor: itemBarColor, borderColor: itemBarBorderColor }"></div>
            <div class="item-price">₦{{itemPrice}}</div>
        </div>
    </div>
</template>

<script>
import nuxtData from "../nuxt.config"

export default {
    name: 'FarmGatePriceBlock',
    data () {
        return {
            highestItemPrice: 1282220,
            baseURL: nuxtData.runtimeConfig.public.baseURL,
            webURL: nuxtData.runtimeConfig.public.webURL,
        }
    },
    props: {
        extraClass: {
            type: String,
        },
        itemName: {
            type: String,
        },
        itemIcon: {
            type: String,
        },
        itemPrice: {
            type: String,
        },
        itemBarColor: {
            type: String,
        },
        itemBarBorderColor: {
            type: String,
        },
        highestprice: {
            type: String,
        },
    },
    methods: {
        getImageSrc(itemIcon) {
            return `/other-images/${itemIcon}`;
        },
        getBarWidth(itemPrice) {
            const price = parseInt(itemPrice, 10);
            return `${(price / parseInt(this.highestprice)) * 100}%`;
            // const price = parseInt(itemPrice.replace(/,/g, ''), 10);
        },
        getPhoto (path) {
          return this.webURL + path
        }
    }
}
</script>

<style>

</style>