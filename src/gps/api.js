import http from '../_config/http'

import Candidate from '../models/suggestions/Candidate'

import { responseWasOK } from '../utils/http'

import { isNotEmpty } from '../utils/functions'

const getMinimumDistanceByLocation = (mostRecentLocation, locations) => {
    let API_URL = `http://localhost:8080/api/v1/locations/minimumDistance`
    return http.put(API_URL,
        JSON.stringify({
            currentLocation: mostRecentLocation,
            locationsPlaces: locations
        })
    ).then(({ data, status }) => {
        let response = []
        if (responseWasOK(status)) {
            return response = data
        }
    }).catch(error => error)
}

const getAllRadius = () => {
    return ['1000', '2000', '4500']
}

const getAllPoiTypes = () => {
    let API_URL = `http://localhost:8080/api/v1/establishments`
    return http.get(API_URL)
    .then(({ data, status }) => {
        let response = []
        if (responseWasOK(status)) {
            return response = data
        }
    }).catch(error => error)
}

const getTruckLocations = licensePlate => {
    let API_URL = `http://localhost:8080/api/v1/locations/${licensePlate}`
    return http.get(API_URL)
    .then(({ data, status }) => {
        let response = []
        if (responseWasOK(status)) {
            return response = data
        }
    }).catch(error => error)
}

const getAllValidSuggestions = ({ selectedPoiType, selectedRadius, truckLocations }) => {
    const KEY = 'AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA'
    if(isNotEmpty(selectedPoiType) && isNotEmpty(selectedRadius) && isNotEmpty(truckLocations)) {
        let API_URL = `textsearch/json?query=${selectedPoiType}&radius=${selectedRadius}`
        API_URL += `&location=${truckLocations[0].lat},${truckLocations[0].lng}&key=AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA`
        console.log(API_URL)
        return http.get(API_URL)
            .then(({ data, status }) => {
                let response = []
                const { results } = data
                console.log(data)
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

export {  getAllRadius, getAllPoiTypes, getTruckLocations, getAllValidSuggestions, getMinimumDistanceByLocation }