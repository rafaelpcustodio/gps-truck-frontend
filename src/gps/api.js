import http from '../_config/http'

import { handleError, handleSuccess, responseWasOK } from '../utils/http'

import { isNotEmpty } from '../utils/functions'

const getAllRadius = () => {
    return ['134', '222', '45']
}

const getAllPoiTypes = () => {
    return ['View all', 'Gas Stations', 'Restaurants', 'Hotels']
}

const getTruckLocations = (licensePlate, poiType) => {
    return [{"latitude": 39.444, "longitude": -122.176},
            {"latitude": 39.445, "longitude": -122.177},
            {"latitude": 39.446, "longitude": -122.178}]
}

const getSuggestions = (selectedPoiType, selectedRadius, mostRecentTruckLocation) => {
    const KEY = 'AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA'
    if(isNotEmpty(selectedPoiType) && isNotEmpty(selectedRadius) && isNotEmpty(mostRecentTruckLocation)) {
        let API_URL = `json?input=${selectedPoiType}/&inputtype=textquery&fields=`
        API_URL += `formatted_address,name,opening_hours,geometry,rating&locationbias=circle:${selectedRadius}@`
        API_URL += `${mostRecentTruckLocation.lat},${mostRecentTruckLocation.lng}&key=AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA`
        return http.get(API_URL)
            .then(({ data, status }) => {
                if (responseWasOK(status)) {
                    console.log(data)
                }
                return data
            }).catch(error => error)
    }
}

export {  getAllRadius, getAllPoiTypes, getTruckLocations, getSuggestions }