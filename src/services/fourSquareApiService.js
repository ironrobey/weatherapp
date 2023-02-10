import axios from 'axios'

const appid = 'fsq3DuvaF1m81oMpTp59oIkcWu0kxi+SGlP23TOzA09Xj5w='

const apiClient = axios.create({
    baseURL: 'https://api.foursquare.com/v3/places/search?near=',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${appid}`
    },
})

export default {
    getPlaces(city) {
        return apiClient.get(`${city}`)
    }
}