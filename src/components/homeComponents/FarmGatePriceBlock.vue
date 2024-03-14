<template>
    <div class="price-block" :class="extraClass">
        <div class="price-item-name">
            <img :src="getImageSrc(itemIcon)" :alt="itemName" class="item-img">
            <span>{{ itemName }}</span>
        </div>
        <div class="price-item-bar flex-div gap-[15px]">
            <div class="price-bar" :style="{ maxWidth: getBarWidth(itemPrice), backgroundColor: itemBarColor, borderColor: itemBarBorderColor }"></div>
            <div class="item-price">₦{{itemPrice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FarmGatePriceBlock',
    data () {
        return {
            highestItemPrice: 5625
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
    },
    methods: {
        getImageSrc(itemIcon) {
            return `/other-images/${itemIcon}`;
        },
        getBarWidth(itemPrice) {
            const price = parseInt(itemPrice.replace(/,/g, ''), 10);
            return `${(price / this.highestItemPrice) * 100}%`;
        },
    }
}
</script>

<style>

</style>