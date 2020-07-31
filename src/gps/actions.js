import { actions } from './constants'

import { createAction } from '../utils/actions'

const getPoiTypesAction = createAction(actions.GET_POY_TYPES_LIST)
const getRadiusAction = createAction(actions.GET_RADIUS_LIST)
const requestPoiTypesAction = createAction(actions.REQUEST_GET_POI_TYPES_LIST)
const requestRadiusAction = createAction(actions.REQUEST_GET_RADIUS_LIST)

const setRadiusSelectedAction = createAction(actions.SET_RADIUS_SELECTED)
const setRadiusListAction = createAction(actions.SET_RADIUS_LIST)
const requestSetRadiusSelectedAction = createAction(actions.REQUEST_SET_RADIUS_SELECTED)
const requestSetRadiusListAction = createAction(actions.REQUEST_SET_RADIUS_LIST)


const setPoiTypeSelectedAction = createAction(actions.SET_POI_TYPE_SELECTED)
const setPoiTypesListAction = createAction(actions.SET_POI_TYPES_LIST)
const requestSetPoiTypeSelectedAction = createAction(actions.REQUEST_SET_POI_TYPE_SELECTED)
const requestSetPoiTypesListAction = createAction(actions.REQUEST_SET_POI_TYPES_LIST)

const setLicensePlateSelectedAction = createAction(actions.SET_LICENSE_PLATE_SELECTED)
const requestSetLicensePlateSelectedAction = createAction(actions.REQUEST_SET_LICENSE_PLATE_SELECTED)

const requestGetLocationAction = createAction(actions.REQUEST_GET_LOCATION)
const requestSetLocationAction = createAction(actions.REQUEST_SET_LOCATION)
const setLocationsAction = createAction(actions.SET_LOCATIONS)

const requestGetSuggestionsAction = createAction(actions.REQUEST_GET_SUGGESTIONS)
const setSuggestionsAction = createAction(actions.SET_SUGGESTIONS)

const requestGetTruckLocationsAction = createAction(actions.REQUEST_GET_TRUCK_LOCATIONS)
const setTruckLocationsAction = createAction(actions.SET_TRUCK_LOCATIONS)

export {
    getRadiusAction,
    getPoiTypesAction,
    requestPoiTypesAction,
    requestRadiusAction,
    requestGetLocationAction,
    requestSetLicensePlateSelectedAction,
    requestGetTruckLocationsAction,
    requestSetLocationAction,
    requestSetRadiusSelectedAction,
    requestSetRadiusListAction,
    requestGetSuggestionsAction,
    requestSetPoiTypeSelectedAction,
    requestSetPoiTypesListAction,
    setTruckLocationsAction,
    setLicensePlateSelectedAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setRadiusSelectedAction,
    setRadiusListAction,
    setSuggestionsAction
}