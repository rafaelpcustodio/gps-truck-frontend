import { getAction } from '../utils/actions';
import { actions } from './constants';
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { getAllRadius, getAllPoiTypes, getTruckLocations, getSuggestions } from './api';

import Location from '../models/Location'

import {
    getRadiusAction,
    getPoiTypesAction,
    setTruckLocationsAction,
    setLicensePlateSelectedAction,
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


function* getPoiTypeListRequested() {
    try {
        const poiTypeList = getAllPoiTypes()
        yield put(getPoiTypesAction(poiTypeList))
    } catch (error) {
        console.log('error')
    }
}


function* getRadiusListRequested() {
    try {
        const radiusList = getAllRadius()
        yield put(getRadiusAction(radiusList))
    } catch (error) {
        console.log(error)
    }
}

function* getTruckLocationsRequested() {
    try {
        const licensePlate = yield select(getLicensePlateSelectedSelector)
        const locations = getTruckLocations(licensePlate)
        const locationsEntity = locations.map(location => {
            const locationEntity = new Location(location)
            return locationEntity
        })
        yield put(setTruckLocationsAction(locationsEntity))
    } catch (error) {
        console.log(error)
    }
}
function* getSuggestionsRequested() {
    try {
        const selectedPoiType = yield select(getPoiTypeSelectedSelector)
        const selectedRadius =  yield select(getRadiusSelectedSelector)
        const truckLocations = yield select(getTruckLocationsListSelector)
        const suggestions = getSuggestions(selectedPoiType, selectedRadius, truckLocations[0])
        yield put(setSuggestionsAction(suggestions))
    } catch (error) {
        console.log(error)
    }
}

function* setPoiTypeListRequested({ payload }) {
    yield put(setPoiTypesListAction(payload))
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

function* setPoiTypeSelectedRequested({ payload }) {
    yield put(setPoiTypeSelectedAction(payload))
}

function* watchGetPoiTypeListRequest() {
    yield takeLatest(getAction(actions.REQUEST_GET_POI_TYPES_LIST), getPoiTypeListRequested)
}

function* watchGetRadiusListRequest() {
    yield takeLatest(getAction(actions.REQUEST_GET_RADIUS_LIST), getRadiusListRequested)
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
// function* watchRequestSetLocation() {
//     yield takeLatest(getAction(actions.REQUEST_SET_LOCATION), setLocationRequested)
// }

function* watchRequestGetSuggestions() {
    yield takeLatest(getAction(actions.REQUEST_GET_SUGGESTIONS), getSuggestionsRequested)
}

function* watchRequestGetTruckLocations() {
    yield takeLatest(getAction(actions.REQUEST_GET_TRUCK_LOCATIONS), getTruckLocationsRequested)
}



function* sagas() {
    yield all([
        watchGetPoiTypeListRequest(),
        watchGetRadiusListRequest(),
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