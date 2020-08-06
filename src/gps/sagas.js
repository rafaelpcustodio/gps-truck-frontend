import { getAction } from '../utils/actions'
import { actions } from './constants'
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects'

import {
    getAllPoiTypes, 
    getLocations,
    getMinimumDistanceByLocation,
    getCandidatesSuggested
} from './api'

import Location from '../models/Location'

import {poiTypes} from './constants'

import {
    setTruckLocationsAction,
    setLicensePlateSelectedAction,
    setMinimumDistanceAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setRadiusSelectedAction,
    setRadiusListAction,
    setSuggestionsAction
} from './actions'

import { 
    getLicensePlateSelectedSelector,
    getPoiTypeSelectedSelector,
    getRadiusSelectedSelector,
    getTruckLocationsListSelector
} from './selectors'

const DEFAULT_MAP = document.createElement('div')


function* getPoiTypeListRequested() {
    try {
        const poiTypeList = yield call(getAllPoiTypes)
        yield put(setPoiTypesListAction(poiTypeList))
    } catch (error) {
        console.log('error')
    }
}

function* getLocationsRequested() {
    try {
        const licensePlate = yield select(getLicensePlateSelectedSelector)
        const locations = yield call(getLocations, licensePlate)
        console.log(locations)
        const locationsEntity = locations.map(location => {
            const locationEntity = new Location(location)
            return locationEntity
        })
        yield put(setTruckLocationsAction(locationsEntity))
    } catch (error) {
        console.log(error)
    }
}
function* setSuggestionsRequested(map) {
    try{
        const poyTypeSelected = yield select(getPoiTypeSelectedSelector)
        const radiusSelected = yield select(getRadiusSelectedSelector)
        const locations = yield select(getTruckLocationsListSelector)
        const mostRecentLocation = locations[0]
        const location = new window.google.maps.LatLng(
            mostRecentLocation.lat,
            mostRecentLocation.lng
        )
        const request = {
            location: location,
            radius: radiusSelected,
            types: [poiTypes[poyTypeSelected]]
        };
        const service = new window.google.maps.places.PlacesService(DEFAULT_MAP)
        const candidatesSuggested = yield call(getCandidatesSuggested, {
            request,
            service
        })
        const minimumDistance = yield call(getMinimumDistanceByLocation, {
            mostRecentLocation,
            candidatesSuggested
        })
        yield put(setSuggestionsAction(candidatesSuggested))
        yield _sleep()
        yield put(setMinimumDistanceAction(minimumDistance))
    } catch (error) {
        console.log(error)
    }
}

function* _sleep() {
    yield delay(500)
}

function* setPoiTypeListRequested({ payload }) {
    yield put(setPoiTypesListAction(payload))
}

function* setPoiTypeSelectedRequested({ payload }) {
    yield put(setPoiTypeSelectedAction(payload))
}

function* setLicensePlateSelectedRequested({ payload }) {
    yield put(setLicensePlateSelectedAction(payload))
}

function* setRadiusListRequested({ payload }) {
    yield put(setRadiusListAction(payload))
}

function* setRadiusSelectedRequested({ payload }) {
    yield put(setRadiusSelectedAction(payload))
}

function* watchGetPoiTypeListRequest() {
    yield takeLatest(getAction(actions.REQUEST_GET_POI_TYPES_LIST), getPoiTypeListRequested)
}

function* watchRequestSetRadiusList() {
    yield takeLatest(getAction(actions.REQUEST_SET_RADIUS_LIST), setRadiusListRequested)
}

function* watchRequestSetPoiTypeList() {
    yield takeLatest(getAction(actions.REQUEST_SET_POI_TYPES_LIST), setPoiTypeListRequested)
}

function* watchRequestSetRadius() {
    yield takeLatest(getAction(actions.REQUEST_SET_RADIUS_SELECTED), setRadiusSelectedRequested)
}

function* watchRequestSetPoiType() {
    yield takeLatest(getAction(actions.REQUEST_SET_POI_TYPE_SELECTED), setPoiTypeSelectedRequested)
}

function* watchRequestSetLicensePlate() {
    yield takeLatest(getAction(actions.REQUEST_SET_LICENSE_PLATE_SELECTED), setLicensePlateSelectedRequested)
}

function* watchRequestGetSuggestions() {
    yield takeLatest(getAction(actions.REQUEST_SET_SUGGESTIONS), setSuggestionsRequested)
}

function* watchRequestGetTruckLocations() {
    yield takeLatest(getAction(actions.REQUEST_GET_LOCATIONS), getLocationsRequested)
}

function* sagas() {
    yield all([
        watchGetPoiTypeListRequest(),
        watchRequestSetLicensePlate(),
        watchRequestSetRadiusList(),
        watchRequestGetTruckLocations(),
        watchRequestGetSuggestions(),
        watchRequestSetRadius(),
        watchRequestSetPoiType(),
        watchRequestSetPoiTypeList()
    ])
}

export { sagas }