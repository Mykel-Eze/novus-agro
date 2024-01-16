<template>
  <section id="farm-gate-price" ref="farmGatePriceSection">
    <div class="row">
        <div class="container">
            <div class="farm-gate-content-wrapper">
                <h2 class="section-title center">Farm Gate Prices</h2>
                <h4 class="section-sub-title center">
                    By Crop Per Metric Ton <span class="pry-color">(May 19, 2023)</span>
                </h4>
                <div class="farm-gate-price-wrapper">
                    <FarmGatePriceBlock
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
    name: "FarmGatePriceSection",
    components: { 
        FarmGatePriceBlock
    },
}
</script>

<style>

</style>