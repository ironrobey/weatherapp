<template>
    <section class="flex sm:flex-col md:flex-col lg:flex-row my-4">
        <div class="w-1/2 flex justify-between text-center">
            <div class="w-1/2 text-center">
                <font-awesome-icon :icon="weatherIcon(props.weather.icon)" class="text-9xl text-white" />
            </div>
            <div class="w-1/2 text-white text-center border-r-2 border-white">
                <p class="text-8xl">{{ Math.round(props.main.temp) }}&deg;C</p>
                <p class="text-lg">{{ props.weather.description }}</p>
            </div>
        </div>
        <div class="w-1/2 flex gap-4 text-center">
            <div class="w-1/3">
                <div class="mb-3">
                    <p class="text-2xl text-white font-bold">{{ Math.round(props.main.temp_max) }}&deg;</p>
                    <p class="text-base text-gray-300">High</p>
                </div>
                <div>
                    <p class="text-2xl text-white font-bold">{{ Math.round(props.main.temp_min) }}&deg;</p>
                    <p class="text-base text-gray-300">Low</p>
                </div>                        
            </div>
            <div class="w-1/3">
                <div class="mb-3">
                    <p class="text-2xl text-white font-bold">{{ props.wind.speed }}</p>
                    <p class="text-base text-gray-300">Wind</p>
                </div>
                <div>
                    <p class="text-2xl text-white font-bold">{{ props.main.humidity }}</p>
                    <p class="text-base text-gray-300">Humidity</p>
                </div> 
            </div>
            <div class="w-1/3">
                <div class="mb-3">
                    <p class="text-2xl text-white font-bold">{{ readableDate(props.sys.sunrise) }}</p>
                    <p class="text-base text-gray-300">Sunrise</p>
                </div>
                <div>
                    <p class="text-2xl text-white font-bold">{{ readableDate(props.sys.sunset) }}</p>
                    <p class="text-base text-gray-300">Sunset</p>
                </div> 
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import General from '@/helpers/general.js'
import moment from 'moment'

const props = defineProps({
    weather: {
        required: true,
    },
    main: {
        required: true
    },
    wind: {
        required: true
    },
    sys: {
        required: true
    },
    timezone: {
        required: true
    }
})

const weatherIcon = (icon) => {
    return General.weatherIcon(icon)
}

const readableDate = (time) => {
    return moment.utc(time,'X').add(props.timezone.value,'seconds').format('HH:mm')
}

</script>