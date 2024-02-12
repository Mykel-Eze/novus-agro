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
                    description:
                        '<li><span class="station-name">AIRPORT RD SS</span> - <span class="station-address">Airport rd, Abuja</span></li>' +
                        '<li><span class="station-name">APO 1 F/S</span> - <span class="station-address">OPPOSITE APO LEGISLATIVE QUARTERS</span></li>' +
                        '<li><span class="station-name">APO 2 SS</span> - <span class="station-address">OPPOSITE APO LEGISLATIVE QUARTERS</span></li>' +
                        '<li><span class="station-name">BUHARI WAY SS</span> - <span class="station-address">BUHARI WAY, GARKI</span></li>' +
                        '<li><span class="station-name">IBB WAY SS</span> - <span class="station-address">IBRAHIM BABANGIDA ROAD</span></li>' +
                        '<li><span class="station-name">Jabi SS</span> - <span class="station-address">AWOLOWO WAY, JABI</span></li>'
                },
                {
                    id: 'NG-BE',
                    name: 'Benue',
                    description:
                        '<li><span class="station-name">BECO SS MAKURDI</span> - <span class="station-address">ATOM KPERA ROAD, MAKURDI</span></li>' +
                        '<li><span class="station-name">AP INTERNATIONAL MARKET, MAKURDI</span> - <span class="station-address">OWNER OCCUPIER ROAD,MAKURDI</span></li>'
                },
                {
                    id: 'NG-BO',
                    name: 'Borno',
                    description:
                        '<li><span class="station-name">DAMBOA ROAD F/S MAIDUGURI</span> - <span class="station-address">21 DAMBOA ROAD, MAIDUGURI</span></li>' +
                        '<li><span class="station-name">RACE COURSE S/S MAIDUGURI</span> - <span class="station-address">KASHIM INBRAHIM WAY, MAIDUGURI</span></li>' +
                        '<li><span class="station-name">ROUND ABOUT S/S MAIDUGURI</span> - <span class="station-address">POST OFFICE ROUND ABOUT MAIDUGURI</span></li>'
                },
                {
                    id: 'NG-CR',
                    name: 'Cross River',
                    description:
                        '<li><span class="station-name">INDUSTRIAL ESTATE CAL</span> - <span class="station-address">HM WAY CALABAR</span></li>' +
                        '<li><span class="station-name">OGOJA ROAD F/S, BEKWARA</span> - <span class="station-address">OGOJA ROAD BEKWARA</span></li>' +
                        '<li><span class="station-name">19 OGOJA ROAD S/S,</span> - <span class="station-address">19 OGOJA RD OBUDU</span></li>' +
                        '<li><span class="station-name">AP RANCH RD S/S, OBUDU</span> - <span class="station-address">RANCH ROAD OBUDU</span></li>'
                },
                {
                    id: 'NG-EB',
                    name: 'Ebonyi',
                    description:
                        '<li><span class="station-name">49A OGOJA RD ABAKILIKI</span> - <span class="station-address">49 a ogoja  SS</span></li>'
                },
                {
                    id: 'NG-EK',
                    name: 'Ekiti',
                    description:
                        '<li><span class="station-name"></span> - <span class="station-address"></span></li>'
                },
                {
                    id: 'NG-EN',
                    name: 'Enugu',
                    description:
                        '<li><span class="station-name">OGUI RD ENUGU</span> - <span class="station-address">15 OGUI ROAD ENUGU</span></li>' +
                        '<li><span class="station-name">HOTEL PRESIDENTIAL ENUGU</span> - <span class="station-address">2 RANGERS AVENUE</span></li>' +
                        '<li><span class="station-name">Amechi Flyover</span> - <span class="station-address">Amechi Flyover Enugu</span></li>'
                },
                {
                    id: 'NG-GO',
                    name: 'Gombe',
                    description:
                        '<li><span class="station-name">AP GOMBE TOWN S/S</span> - <span class="station-address">OPPOSITE INTERNATIONAL HOTEL YOLA ROAD</span></li>' +
                        '<li><span class="station-name">AP BILLIRI S/S GOMBE</span> - <span class="station-address">YOLA ROAD, BILLIRI</span></li>' +
                        '<li><span class="station-name">AP BAUCHI ROAD S/S GOMBE</span> - <span class="station-address">BAUCHI ROAD</span></li>'
                },
                {
                    id: 'NG-IM',
                    name: 'Imo',
                    description:
                        '<li><span class="station-name">Elele Rd</span> - <span class="station-address">No 3 Port Harcourt Road, Owerri</span></li>' +
                        '<li><span class="station-name">Okigwe Rd</span> - <span class="station-address">12 Okigwe Rd amajk, Owerri</span></li>' +
                        '<li><span class="station-name">Egbu rd</span> - <span class="station-address">Kilometer 2 Egbu Rd,Owerri</span></li>'
                },
                {
                    id: 'NG-JI',
                    name: 'Jigawa',
                    description:
                        '<li><span class="station-name">Malam Madori</span> - <span class="station-address">MALANMADORI JIGAWA STATE</span></li>' +
                        '<li><span class="station-name">Dutse S/S</span> - <span class="station-address">KIYAWA ROAD DUTSE,  JIGAWA STATE</span></li>'
                },
                {
                    id: 'NG-KD',
                    name: 'Kaduna',
                    description:
                        '<li><span class="station-name">ALI AKILU</span> - <span class="station-address">NO 33, ALI AKILU ROAD KADUNA</span></li>' +
                        '<li><span class="station-name">WAFF ROAD</span> - <span class="station-address">NO 24, WAFF ROAD BESIDE HAMDALLA HOTEL KADUNA</span></li>' +
                        '<li><span class="station-name">KACHIA ROAD</span> - <span class="station-address">NO 4, KACHIA ROAD, KADUNA SOUTH</span></li>' +
                        '<li><span class="station-name">REFINERY JUNCTION</span> - <span class="station-address">BP 5, GURBIYA STREET, SABON GARI, REFINERY JUNCTION KADUNA</span></li>' +
                        '<li><span class="station-name">MANDO</span> - <span class="station-address">KM 3, MANDO LAGOS ROAD KADUNA</span></li>' +
                        '<li><span class="station-name">KM 2 ZARIA RD</span> - <span class="station-address">KM 2, KADUNA ZARIA ROAD KADUNA</span></li>' +
                        '<li><span class="station-name">POLY ROAD S/S</span> - <span class="station-address">POLY ROAD,KADUNA</span></li>' +
                        '<li><span class="station-name">HYELPA PETROLEUM NIG LTD</span> - <span class="station-address">KM14 KAKAU,ALONG ABUJA-KADUNA RD</span></li>' +
                        '<li><span class="station-name">MARABARIDO</span> - <span class="station-address">ALONG MARABARIDO, KADUNA</span></li>' +
                        '<li><span class="station-name">WORLD LINK PETROLEUM AND GAS LIMITED</span> - <span class="station-address">NNMIDI AZIKIWE ROAD,BY PASS KADUNA</span></li>' +
                        '<li><span class="station-name">BAKORI</span> - <span class="station-address">KASTINA ROAD, BAKORI</span></li>' +
                        '<li><span class="station-name">CONSTITUTION ROAD SS</span> - <span class="station-address">ALONG CONSTITUTION ROAD, KADUNA</span></li>'
                },
                {
                    id: 'NG-KN',
                    name: 'Kano',
                    description:
                        '<li><span class="station-name">Leventis F/S</span> - <span class="station-address">MURTALA MUHMMAD WAY KANO</span></li>' +
                        '<li><span class="station-name">Zaria Road S/S</span> - <span class="station-address">FO ZARIA ROADOPP.COE,KANO</span></li>' +
                        '<li><span class="station-name">Court Road F/S</span> - <span class="station-address">COURT RD,SABON GARI KANO</span></li>' +
                        '<li><span class="station-name">Bello Road S/S</span> - <span class="station-address">BELLO ROAD, PZ AREA, KANO</span></li>' +
                        '<li><span class="station-name">AP Club RD S/S</span> - <span class="station-address">CLUB ROAD, KANO</span></li>' +
                        '<li><span class="station-name">AP Kachako F/S</span> - <span class="station-address">KACHAKO TOWN</span></li>' +
                        '<li><span class="station-name">HADEJIA ROAD S/S</span> - <span class="station-address">HADEJIA RD,KANO</span></li>' +
                        '<li><span class="station-name">KANO ROAD KATSINA</span> - <span class="station-address">KANO ROAD KATSINA</span></li>' +
                        '<li><span class="station-name">Three broathers Nigeria LTD</span> - <span class="station-address">HADEJIA RD,KANO</span></li>' +
                        '<li><span class="station-name">SID Investment LTD</span> - <span class="station-address">HADEJIA RD,KANO</span></li>'
                },
                {
                    id: 'NG-LA',
                    name: 'Lagos',
                    description:
                        '<li><span class="station-name">IKORODU S/S</span> - <span class="station-address">IKORODU ROUNABOUT</span></li>' +
                        '<li><span class="station-name">JEBBA</span> - <span class="station-address">76, HERBERT MACAULAY WAY EBUTTE METTA</span></li>' +
                        '<li><span class="station-name">LADIPO</span> - <span class="station-address">110,LADIPO STR, MATORI MUSHIN</span></li>' +
                        '<li><span class="station-name">AIRPORT S/S</span> - <span class="station-address">ALONG LOCAL AIRPORT, AVIATION IKEJA</span></li>' +
                        '<li><span class="station-name">IKEJA S/S</span> - <span class="station-address">39, OBA AKRAN AVENUE, IKEJA</span></li>' +
                        '<li><span class="station-name">ITIRE S/S</span> - <span class="station-address">36, ITIRE RD, SURULERE</span></li>' +
                        '<li><span class="station-name">OGBA</span> - <span class="station-address">AP OGBA OGUNJI RD, OGBA</span></li>' +
                        '<li><span class="station-name">OLD APAPA ROAD S/S</span> - <span class="station-address">81, MOSHOOD ABIOLA WAY OLD APAPA RD, EBUTE METTA</span></li>' +
                        '<li><span class="station-name">SHOMOLU S/S</span> - <span class="station-address">138, IKORODU RD, ONIPANU</span></li>' +
                        '<li><span class="station-name">WESTERN AVENUE</span> - <span class="station-address">10, WESTERN AVENUE SURULERE</span></li>' +
                        '<li><span class="station-name">CAMPBELL</span> - <span class="station-address">CAMPBELL STREET LAGOS ISLAND</span></li>'
                },
                {
                    id: 'NG-NA',
                    name: 'Nasarawa',
                    description:
                        '<li><span class="station-name">LAFIA SS, LAFIA</span> - <span class="station-address">MAKURDI EXPRESS  ROAD, LAFIA</span></li>' +
                        '<li><span class="station-name">NEW NYANYAN 1 SS</span> - <span class="station-address">NEW NYANTAN, NASARAWA STATE</span></li>'
                },
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
                    longitude: 8.3713,
                    latitude: 7.1907,
                    color: am4core.color('rgba(255,211,36,1)'), // Benue
                },
                {
                    longitude: 13.1614,
                    latitude: 11.5264,
                    color: am4core.color('rgba(255,211,36,1)'), // Borno
                },
                {
                    longitude: 8.299,
                    latitude: 5.898,
                    color: am4core.color('rgba(255,211,36,1)'), // Cross River
                },
                {
                    longitude: 7.9707,
                    latitude: 6.7299,
                    color: am4core.color('rgba(255,211,36,1)'), // Ebonyi
                },
                {
                    longitude: 5.318,
                    latitude: 7.5226,
                    color: am4core.color('rgba(255,211,36,1)'), // Ekiti
                },
                {
                    longitude: 7.4938,
                    latitude: 6.4583,
                    color: am4core.color('rgba(255,211,36,1)'), // Enugu
                },
                {
                    longitude: 11.1607,
                    latitude: 10.1494,
                    color: am4core.color('rgba(255,211,36,1)'), // Gombe
                },
                {
                    longitude: 7.0249,
                    latitude: 5.833,
                    color: am4core.color('rgba(255,211,36,1)'), // Imo
                },
                {
                    longitude: 9.7492,
                    latitude: 12.7928,
                    color: am4core.color('rgba(255,211,36,1)'), // Jigawa
                },
                {
                    longitude: 7.4352,
                    latitude: 10.5162,
                    color: am4core.color('rgba(255,211,36,1)'), // Kaduna
                },
                {
                    longitude: 8.5217,
                    latitude: 11.9416,
                    color: am4core.color('rgba(255,211,36,1)'), // Kano
                },
                {
                    longitude: 3.3792,
                    latitude: 6.5244,
                    color: am4core.color('rgba(255,211,36,1)'), // Lagos
                },
                {
                    longitude: 8.5291,
                    latitude: 8.6036,
                    color: am4core.color('rgba(255,211,36,1)'), // Nasarawa
                },
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