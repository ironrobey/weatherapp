import axios from 'axios'

const appid = '07f4773166142375bb656593de4a87c6'

const apiClient = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})



export default {
    getCities(city) {
        return apiClient.get(`?q=${city}&units=metric&APPID=${appid}`)
    }
}