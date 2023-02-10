import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCloud,
    faCloudShowersHeavy,
    faCloudShowersWater,
    faCloudRain,
    faCloudSun,
    faSmog,
    faSnowflake,
    faSun,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'


library.add(
    faCloud,
    faCloudShowersHeavy,
    faCloudShowersWater,
    faCloudRain,
    faCloudSun,
    faSmog,
    faSnowflake,
    faSun,
    faLocationDot
)

const app = createApp(App)

app.use(router)

app.mount('#app')
