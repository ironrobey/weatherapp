<template>
    <div class="w-full md:w-auto md:col-span-1 lg:w-1/6 h-80 bg-white text-white rounded-lg shadow-2xl p-5 object-none bg-top relative bg-no-repeat md:object-contain"
        :style="{ backgroundImage: `url('src/assets/images/${data.name.toLowerCase()}.jpg')` }"
        v-for="(data, index) in weatherData" :key="index">
        <RouterLink
                target="_blank"
                :to="{ name: 'city', params: { city: data.name.toLowerCase() } }"
            >
            <div class="flex flex-col gap-4 justify-between absolute z-40 h-5/6">
                <h2 class="text-2xl font-bold">
                    <font-awesome-icon icon="location-dot" class="text-white" />
                    {{ data.name }}
                </h2>
                <div>
                    <font-awesome-icon :icon="weatherIcon(data.weather[0].icon)" class="text-6xl text-white" />
                    <p class="text-6xl font-bold my-3">{{ Math.round(data.main.temp) }}&deg;C</p>
                    <p class="text-base font-bold">{{ data.weather[0].description }}</p>
                </div>
            </div>
            <div
                class="absolute top-0 left-0 right-0 bottom-0 opacity-80 bg-gradient-to-t from-cyan-400 to-blue-600 z-10 rounded-lg">
                &nbsp;</div>
        </RouterLink>
    </div>
</template>

<script setup>
import General from '@/helpers/general.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const weatherIcon = (icon) => {
    return General.weatherIcon(icon)
}

const props = defineProps({
    weatherData: {
        required: true,
    },
})
</script>