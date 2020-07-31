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
    return [{"latitude": 41.40285, "longitude": 2.17403},
            {"latitude": 41.40286, "longitude": 2.17402},
            {"latitude": 41.40287, "longitude": 2.17401},
            {"latitude": 41.40288, "longitude": 2.17400},
            {"latitude": 41.40289, "longitude": 2.17399},
            {"latitude": 41.40290, "longitude": 2.17398},
            {"latitude": 41.40291, "longitude": 2.17397},
            {"latitude": 41.40292, "longitude": 2.17396},
            {"latitude": 41.40293, "longitude": 2.17395},
            {"latitude": 41.40294, "longitude": 2.17394},
            {"latitude": 41.40295, "longitude": 2.17393},
            {"latitude": 41.40296, "longitude": 2.17392}]
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