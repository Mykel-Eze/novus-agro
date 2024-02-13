<template>
  <div id="map" />
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_nigeriaLow from "@amcharts/amcharts4-geodata/nigeriaLow";

export default {
    name: "GrainpointMap",
    mounted() {
        // Call the method to initialize the map
        this.initializeMap();
    },
    methods: {
        initializeMap() {
            // const { am4core, am4maps } = this.$am4core()

            const map = am4core.create('map', am4maps.MapChart)

            // eslint-disable-next-line camelcase
            map.geodata = am4geodata_nigeriaLow

            map.projection = new am4maps.projections.Mercator()

            const polygonSeries = map.series.push(new am4maps.MapPolygonSeries())

            polygonSeries.useGeodata = true

            map.maxZoomLevel = 1
            map.seriesContainer.draggable = false
            map.seriesContainer.resizable = false

            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template
            polygonTemplate.tooltipText = '{name}'
            polygonTemplate.fill = am4core.color('#74B266')

            // Create hover state and set alternative fill color
            const hs = polygonTemplate.states.create('hover')
            hs.properties.fill = am4core.color('#367B25')

            // LA
            polygonSeries.data = [
                {
                    id: 'NG-FC',
                    name: 'Abuja (FCT)',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">24</span></li>'
                },
                {
                    id: 'NG-AB',
                    name: 'Abia',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-AD',
                    name: 'Adamawa',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">26</span></li>'
                },
                {
                    id: 'NG-AK',
                    name: 'Akwa Ibom',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-AN',
                    name: 'Anambra',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">70</span></li>'
                },
                {
                    id: 'NG-BA',
                    name: 'Bauchi',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">74</span></li>'
                },
                {
                    id: 'NG-BY',
                    name: 'Bayelsa',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-BE',
                    name: 'Benue',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">76</span></li>'
                },
                {
                    id: 'NG-BO',
                    name: 'Borno',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">34</span></li>'
                },
                {
                    id: 'NG-CR',
                    name: 'Cross River',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">60</span></li>'
                },
                {
                    id: 'NG-DE',
                    name: 'Delta',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-EB',
                    name: 'Ebonyi',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">09</span></li>'
                },
                {
                    id: 'NG-EK',
                    name: 'Ekiti',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">33</span></li>'
                },
                {
                    id: 'NG-ED',
                    name: 'Edo',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-EN',
                    name: 'Enugu',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-GO',
                    name: 'Gombe',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">134</span></li>'
                },
                {
                    id: 'NG-IM',
                    name: 'Imo',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-JI',
                    name: 'Jigawa',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">56</span></li>'
                },
                {
                    id: 'NG-KD',
                    name: 'Kaduna',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">165</span></li>'
                },
                {
                    id: 'NG-KN',
                    name: 'Kano',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">27</span></li>'
                },
                {
                    id: 'NG-KT',
                    name: 'Katsina',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">14</span></li>'
                },
                {
                    id: 'NG-KE',
                    name: 'Kebbi',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-KO',
                    name: 'Kogi',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">42</span></li>'
                },
                {
                    id: 'NG-KW',
                    name: 'Kwara',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-LA',
                    name: 'Lagos',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-NA',
                    name: 'Nasarawa',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">17</span></li>'
                },
                {
                    id: 'NG-NI',
                    name: 'Niger',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">13</span></li>'
                },
                {
                    id: 'NG-OG',
                    name: 'Ogun',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-ON',
                    name: 'Ondo',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-OS',
                    name: 'Osun',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-OY',
                    name: 'Oyo',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-PL',
                    name: 'Plateau',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">61</span></li>'
                },
                {
                    id: 'NG-RI',
                    name: 'Rivers',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-SO',
                    name: 'Sokoto',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-TA',
                    name: 'Taraba',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                },
                {
                    id: 'NG-YO',
                    name: 'Yobe',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">50</span></li>'
                },
                {
                    id: 'NG-ZA',
                    name: 'Zamfara',
                    description: '<li><span class="map-box-title">No. of outlets</span> - <span class="map-box-title">N/A</span></li>'
                }

            ]

            // Get Object info on-click
            polygonTemplate.events.on('hit', function (ev) {
                map.closeAllPopups()
                map.openModal(
                    '<h4 class="amMapHeader">' + ev.target.dataItem.dataContext.name + '</h4>' +
                    '<div class="locations-wrapper"><ul class="locations-list">' + ev.target.dataItem.dataContext.description + '</ul></div>'
                )
                map.modal.elements.title(ev.target.dataItem.dataContext.name)
            })

            // Create Image series
            const imageSeries = map.series.push(new am4maps.MapImageSeries())

            // Set mouse style on hover
            polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

            // Create image
            const imageSeriesTemplate = imageSeries.mapImages.template
            const marker = imageSeriesTemplate.createChild(am4core.Sprite)
            marker.path = 'M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123'
            marker.width = 28
            marker.height = 28
            marker.nonScaling = true
            marker.tooltipText = '{title}'
            marker.horizontalCenter = 'middle'
            marker.verticalCenter = 'middle'
            marker.propertyFields.fill = 'color'

            // Set property fields
            imageSeriesTemplate.propertyFields.latitude = 'latitude'
            imageSeriesTemplate.propertyFields.longitude = 'longitude'

            // Add data for the three cities
            imageSeries.data = [
                {
                    longitude: 7.4951,
                    latitude: 9.0579,
                    color: am4core.color('rgba(255,211,36,1)'), // Abuja (Federal Capital Territory)
                },
                {
                    longitude: 12.4108,
                    latitude: 9.3349,
                    color: am4core.color('rgba(255,211,36,1)'), // Adamawa
                },
                {
                    longitude: 6.8770,
                    latitude: 6.2108,
                    color: am4core.color('rgba(255,211,36,1)'), // Anambra
                },
                {
                    longitude: 10.1897,
                    latitude: 11.7365,
                    color: am4core.color('rgba(255,211,36,1)'), // Bauchi
                },
                {
                    longitude: 8.3713,
                    latitude: 7.1907,
                    color: am4core.color('rgba(255,211,36,1)'), // Benue
                },
                {
                    longitude: 13.1503,
                    latitude: 11.8003,
                    color: am4core.color('rgba(255,211,36,1)'), // Borno
                },
                {
                    longitude: 8.5833,
                    latitude: 5.5833,
                    color: am4core.color('rgba(255,211,36,1)'), // Cross River
                },
                {
                    longitude: 7.9868,
                    latitude: 6.2336,
                    color: am4core.color('rgba(255,211,36,1)'), // Ebonyi
                },
                {
                    longitude: 5.2190,
                    latitude: 7.6254,
                    color: am4core.color('rgba(255,211,36,1)'), // Ekiti
                },
                {
                    longitude: 11.0576,
                    latitude: 10.3023,
                    color: am4core.color('rgba(255,211,36,1)'), // Gombe
                },
                {
                    longitude: 9.1568,
                    latitude: 12.5709,
                    color: am4core.color('rgba(255,211,36,1)'), // Jigawa
                },
                {
                    longitude: 7.4561,
                    latitude: 10.5161,
                    color: am4core.color('rgba(255,211,36,1)'), // Kaduna
                },
                {
                    longitude: 8.5132,
                    latitude: 11.8315,
                    color: am4core.color('rgba(255,211,36,1)'), // Kano
                },
                {
                    longitude: 7.5918,
                    latitude: 12.0022,
                    color: am4core.color('rgba(255,211,36,1)'), // Katsina
                },
                {
                    longitude: 6.7250,
                    latitude: 7.7623,
                    color: am4core.color('rgba(255,211,36,1)'), // Kogi
                },
                {
                    longitude: 8.5200,
                    latitude: 8.5153,
                    color: am4core.color('rgba(255,211,36,1)'), // Nasarawa
                },
                {
                    longitude: 6.5569,
                    latitude: 9.7815,
                    color: am4core.color('rgba(255,211,36,1)'), // Niger
                },
                {
                    longitude: 8.8932,
                    latitude: 9.4142,
                    color: am4core.color('rgba(255,211,36,1)'), // Plateau
                },
                {
                    longitude: 11.3961,
                    latitude: 9.0507,
                    color: am4core.color('rgba(255,211,36,1)'), // Taraba
                },
                {
                    longitude: 11.9669,
                    latitude: 12.3605,
                    color: am4core.color('rgba(255,211,36,1)'), // Yobe
                }
            ]
        }
    },
    beforeUnmount() {
        if (this.map) {
            this.map.dispose()
        }
    },
}
</script>

<style>

</style>