<template>
    <main>
        <div class="w-full sm:w-2/3 md:w-2/3 lg:w-5/6 mx-auto">

            <div class="w-full flex flex-col md:flex-none md:grid-cols-3 md:grid-auto-cols lg:flex lg:flex-row gap-4">

                <Card :weatherData="weatherData"/>

            </div>

        </div>
    </main>
</template>


<script setup>
import { reactive, onMounted } from 'vue'
import openWeatherApiService from '@/services/openWeatherApiService.js'

import Card from '@/components/Card.vue'

const weatherData = reactive([])

onMounted(() => {
    const cities = ['tokyo', 'yokohama', 'kyoto', 'osaka', 'sapporo', 'nagoya']

    cities.forEach(async (city) => {

        openWeatherApiService.getCities(city).then((response)=> {
            weatherData.push(response.data)
        })
        
    })

})


</script>