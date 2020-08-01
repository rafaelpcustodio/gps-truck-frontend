import http from '../_config/http'

import Candidate from '../models/suggestions/Candidate'

import { responseWasOK } from '../utils/http'

import { isNotEmpty } from '../utils/functions'

const getAllRadius = () => {
    return ['1000', '2000', '4500']
}

const getAllPoiTypes = () => {
    return [{'description': 'View all', 'abbreviation': 'restaurant,hotel,gas-station'},
            {'description': 'Gas Stations', 'abbreviation': 'gas-station'},
            {'description': 'Restaurants', 'abbreviation': 'restaurant'},
            {'description': 'Hotels', 'abbreviation': 'hotel'}]
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

const getSuggestions = ({ selectedPoiType, selectedRadius, truckLocations }) => {
    const KEY = 'AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA'
    if(isNotEmpty(selectedPoiType) && isNotEmpty(selectedRadius) && isNotEmpty(truckLocations)) {
        let API_URL = `json?query=${selectedPoiType}&radius=${selectedRadius}`
        API_URL += `&location=${truckLocations[0].lat},${truckLocations[0].lng}&key=AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA`
        return http.get(API_URL)
            .then(({ data, status }) => {
                let response = []
                const { results } = data
                if (responseWasOK(status)) {
                    response = results
                        .filter(result => result.business_status === 'OPERATIONAL')
                        .filter(result => result.opening_hours ? result.opening_hours.open_now : true)
                        .map(result => new Candidate(result))
                }
                return response
            }).catch(error => error)
    }
}

export {  getAllRadius, getAllPoiTypes, getTruckLocations, getSuggestions }