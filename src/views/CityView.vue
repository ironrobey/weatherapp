<template>
    <main>
        <div class="w-full sm:w-2/3 md:w-2/3 lg:w-5/6 mx-auto">
            <header>
                <h1 class="text-4xl text-white font-bold">Tokyo, Japan</h1>
                <p class="text-base text-white">February 10, 2023</p>
            </header>

            <CityData 
                :weather="weather"
                :main="main"
                :wind="wind"
                :sys="sys"
                :timezone="timezone"
                />
            <Places :places="places" />

        </div>
    </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import openWeatherApiService from '@/services/openWeatherApiService.js'
import fourSquareApiService from '@/services/fourSquareApiService.js'
import CityData from '@/components/CityData.vue'
import Places from '@/components/Places.vue'

const props = defineProps({
    city: {
        required: true,
    },
})

const places = ref([])
const weather = ref([])
const main = ref([])
const wind = ref([])
const sys = ref([])
const timezone = ref([])

onMounted(async () => {
    openWeatherApiService.getCities(props.city).then((response) => {
        weather.value = response.data.weather[0]
        main.value = response.data.main
        wind.value = response.data.wind
        sys.value = response.data.sys
        timezone.value = response.data.timezone
    })

    fourSquareApiService.getPlaces(props.city).then((response) => {
        places.value = response.data.results
    })

})




</script>