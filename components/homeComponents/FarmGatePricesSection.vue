<template>
  <section id="farm-gate-prices" ref="farmGatePriceSection">
    <div class="row">
        <div class="container">
            <div class="farm-gate-content-wrapper">
                <h2 class="section-title center">Farm Gate Prices</h2>
                <template v-if="farmgatepricetitle">
                    <h4 class="section-sub-title center">
                        {{farmgatepricetitle.title}} <span class="pry-color">( {{ getMonthName(farmgatepricetitle.from_date)  }}  {{ getDayNumber(farmgatepricetitle.from_date) }} - {{ getMonthName(farmgatepricetitle.to_date) }} {{ getDayNumber(farmgatepricetitle.to_date) }} , {{ farmgatepricetitle.year }} )</span>
                    </h4>
                </template>
                <div class="farm-gate-price-wrapper">
                    <template v-if="farmgateprices.length > 0">
                        <template v-for="(farmgateprice, index) in farmgateprices" :key="index">
                            <FarmGatePriceBlock
                                extraClass="hibiscus-block"
                                :itemName="farmgateprice.itemName"
                                :itemIcon="farmgateprice.itemIcon "
                                :itemPrice="farmgateprice.itemPrice"
                                :itemBarWidth=getItemBarWidth(farmgateprice.itemPrice)
                                :itemBarColor="farmgateprice.itemBarColor"
                                :itemBarBorderColor="farmgateprice.itemBarBorderColor"
                                :highestprice="highestFarmGatePrice"
                            />
                        </template>
                    </template>
                    <!-- <FarmGatePriceBlock
                        extraClass="hibiscus-block"
                        itemName="Hibiscus"
                        itemIcon="hibiscus.png"
                        itemPrice="1,282,220"
                        itemBarWidth="100%"
                        itemBarColor="rgba(255, 87, 51, 0.4)"
                        itemBarBorderColor="rgb(255, 87, 51)"
                    />
                    <FarmGatePriceBlock
                        extraClass="groundnut-block"
                        itemName="Groundnut Kampala"
                        itemIcon="peanuts.png"
                        itemPrice="762,163"
                        itemBarColor="rgba(218, 247, 166, 0.4)"
                        itemBarBorderColor="rgb(218, 247, 166)"
                    />
                    <FarmGatePriceBlock
                        extraClass="soybeans-block"
                        itemName="Soybeans" 
                        itemIcon="soybeans.png"
                        itemPrice="381,854"
                        itemBarColor="rgba(255, 195, 0, 0.4)"
                        itemBarBorderColor="rgb(255, 195, 0)"
                    />
                    <FarmGatePriceBlock
                        extraClass="rice-block"
                        itemName="Rice Paddy"
                        itemIcon="rice.png"
                        itemPrice="307,468"
                        itemBarColor="rgba(88, 24, 69, 0.4)"
                        itemBarBorderColor="rgb(88, 24, 69)"
                    />
                    <FarmGatePriceBlock
                        extraClass="sorghum-block"
                        itemName="Sorghum (Yellow)"
                        itemIcon="sorghum.png"
                        itemPrice="283,290"
                        itemBarColor="rgba(199, 0, 57, 0.4)"
                        itemBarBorderColor="rgb(199, 0, 57)"
                    />
                    <FarmGatePriceBlock
                        extraClass="maize-block"
                        itemName="Maize White"
                        itemIcon="maize.png"
                        itemPrice="247,233"
                        itemBarColor="rgba(144, 12, 63, 0.4)"
                        itemBarBorderColor="rgb(144, 12, 63)"
                    /> -->
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import FarmGatePriceBlock from './FarmGatePriceBlock.vue'
import nuxtData from "../nuxt.config"

export default {
    name: "FarmGatePricesSection",
    data () {
        return{
            baseURL: nuxtData.runtimeConfig.public.baseURL,
            webURL: nuxtData.runtimeConfig.public.webURL,
            errors: {},
            farmgateprices: {},
            farmgatepricetitle: {},
            months : ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"],
        }
    },
    components: { 
        FarmGatePriceBlock
    },
    methods: {
        async getFarmGatePrices () {
            await $fetch(`${this.baseURL}farmgateprice`)
            .then((response) => {
                this.farmgateprices = response.response.data
            }).catch((error) => {
            this.errors = error
            })
        },
        async getFarmGatePriceTitle () {
            await $fetch(`${this.baseURL}farmgatepricetitle`)
            .then((response) => {
                this.farmgatepricetitle = response.response.data
                console.log(this.farmgatepricetitle)
            })
            .catch((error) => {
                this.errors = error
            })
        },
        getItemBarWidth(price){
            if(price == this.highestFarmGatePrice ){
                return "100%"
            }else{
                return '';
            }
        },
        getMonthName(thedate){
            const dt = new Date(thedate);
            return this.months[dt.getMonth()]
        },
        getDayNumber(thedate){
            const dt = new Date(thedate);
            return dt.getDate();
        },
    },
    computed: {
        highestFarmGatePrice: function () {
            // Check if the array is not empty
            if (this.farmgateprices.length === 0) {
                return null; // or any default value you prefer for an empty array
            }
            // Initialize the highest price with the first item's price
            let highestPrice = this.farmgateprices[0].itemPrice;

            // Loop through the array to find the highest price
            for (let i = 1; i < this.farmgateprices.length; i++) {
                const currentItemPrice = this.farmgateprices[i].itemPrice;

                // Check if the current item's price is higher than the stored highest price
                if (currentItemPrice > highestPrice) {
                highestPrice = currentItemPrice;
                }
            }
            return highestPrice;
        }
    },
    mounted() {

        this.getFarmGatePrices();
        this.getFarmGatePriceTitle();

    },
}
</script>

<style>

</style>