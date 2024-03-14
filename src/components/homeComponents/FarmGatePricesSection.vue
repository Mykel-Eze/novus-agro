<template>
  <section id="farm-gate-prices" ref="farmGatePriceSection">
    <div class="row">
        <div class="container">
            <div class="farm-gate-content-wrapper">
                <h2 class="section-title center">Farm Gate Prices</h2>
                <h4 class="section-sub-title center">
                    Weekly Comodities Price Report <span class="pry-color">(Feb 5 - Feb 12, 2024)</span>
                </h4>
                <div class="farm-gate-price-wrapper">
                    <FarmGatePriceBlock
                        extraClass="hibiscus-block"
                        itemName="Hibiscus"
                        itemIcon="hibiscus.png"
                        itemPrice="5,625"
                        itemBarWidth="100%"
                        itemBarColor="rgba(255, 87, 51, 0.4)"
                        itemBarBorderColor="rgb(255, 87, 51)"
                    />
                    <FarmGatePriceBlock
                        extraClass="groundnut-block"
                        itemName="Groundnut Kampala"
                        itemIcon="peanuts.png"
                        itemPrice="8,43"
                        itemBarColor="rgba(218, 247, 166, 0.4)"
                        itemBarBorderColor="rgb(218, 247, 166)"
                    />
                    <FarmGatePriceBlock
                        extraClass="soybeans-block"
                        itemName="Soybeans" 
                        itemIcon="soybeans.png"
                        itemPrice="5,78"
                        itemBarColor="rgba(255, 195, 0, 0.4)"
                        itemBarBorderColor="rgb(255, 195, 0)"
                    />
                    <FarmGatePriceBlock
                        extraClass="rice-block"
                        itemName="Rice Paddy"
                        itemIcon="rice.png"
                        itemPrice="3,88"
                        itemBarColor="rgba(88, 24, 69, 0.4)"
                        itemBarBorderColor="rgb(88, 24, 69)"
                    />
                    <FarmGatePriceBlock
                        extraClass="sorghum-block"
                        itemName="Sorghum (Yellow)"
                        itemIcon="sorghum.png"
                        itemPrice="4,97"
                        itemBarColor="rgba(199, 0, 57, 0.4)"
                        itemBarBorderColor="rgb(199, 0, 57)"
                    />
                    <FarmGatePriceBlock
                        extraClass="maize-block"
                        itemName="Maize White"
                        itemIcon="maize.png"
                        itemPrice="4,83"
                        itemBarColor="rgba(144, 12, 63, 0.4)"
                        itemBarBorderColor="rgb(144, 12, 63)"
                    />
                    <FarmGatePriceBlock
                        extraClass="sorghum-block"
                        itemName="Sesame (Yellow)"
                        itemIcon="sorghum.png"
                        itemPrice="1,300"
                        itemBarColor="rgba(180, 0, 40, 0.5)"
                        itemBarBorderColor="rgb(199, 0, 57)"
                    />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import FarmGatePriceBlock from './FarmGatePriceBlock.vue'

export default {
    name: "FarmGatePricesSection",
    components: { 
        FarmGatePriceBlock
    },
}
</script>

<style>

</style>