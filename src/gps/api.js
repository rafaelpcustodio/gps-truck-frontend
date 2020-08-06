import http from '../_config/http'
import moment from 'moment'

import Candidate from '../models/suggestions/Candidate'
import MinimumDistance from '../models/MinimumDistance'

import { responseWasOK } from '../utils/http'

import EstablishmentsType from '../models/EstablishmentsType'
import { isNotEmpty } from '../utils/functions'

import { SUGGESTION, STATUS } from '../constants/HTTP'

const getAllPoiTypes = () => {
    let API_URL = `/api/v1/establishments`
    return http.get(API_URL)
    .then(({ data, status }) => {
        let response = []
        const { establishments } = data
        if (responseWasOK(status)) {
            response = establishments.map(item => new EstablishmentsType(item))
            return response
        }
    }).catch(error => error)
}

const getMinimumDistanceByLocation = ({ mostRecentLocation, candidatesSuggested }) => {
    let API_URL = `/api/v1/locations/minimum-distance`
    return http.post(API_URL,
        JSON.stringify({
            currentLocation: mostRecentLocation.toDTO,
            locationsPlaces: candidatesSuggested.map(candidate => candidate.toCandidateLocationDTO)
        })
    ).then(({ data, status }) => {
        if (responseWasOK(status)) {
            return new MinimumDistance(data)
        }
    }).catch(error => error)
}

const getCandidatesSuggested = ({ service,request }) => {
    return new Promise((resolve, reject) => {
        service.nearbySearch(request, (results, status) => {
            if(status === STATUS.OK) {
                return resolve(results)
            }
            return reject(results)
        })
    }).then((results) => {
        return results
            .filter(result => result.business_status === SUGGESTION.OPERATIONAL)
            .map(result => new Candidate(result))
    }).catch(error => console.log(error))
}

const getLocations = licensePlate => {
    if(isNotEmpty(licensePlate)) {
        const nowDateMinusOneHour = moment(new Date()).subtract(2, 'hours').format()
        let API_URL = `/api/v1/locations/${licensePlate.toUpperCase()}?dateTime=${nowDateMinusOneHour}`
        return http.get(API_URL)
        .then(({ data, status }) => {
            const { vehicleLocationEntities } = data
            if (responseWasOK(status)) {
                return vehicleLocationEntities
            }
        }).catch(error => error)
    }
}

export {
    getAllPoiTypes,
    getMinimumDistanceByLocation, 
    getLocations,
    getCandidatesSuggested
}