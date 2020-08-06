import { actions } from './constants'

import { createAction } from '../utils/actions'

const getPoiTypesAction = createAction(actions.GET_POY_TYPES_LIST)
const requestPoiTypesAction = createAction(actions.REQUEST_GET_POI_TYPES_LIST)

const setRadiusSelectedAction = createAction(actions.SET_RADIUS_SELECTED)
const setRadiusListAction = createAction(actions.SET_RADIUS_LIST)
const requestSetRadiusSelectedAction = createAction(actions.REQUEST_SET_RADIUS_SELECTED)
const requestSetRadiusListAction = createAction(actions.REQUEST_SET_RADIUS_LIST)


const setPoiTypeSelectedAction = createAction(actions.SET_POI_TYPE_SELECTED)
const setPoiTypesListAction = createAction(actions.SET_POI_TYPES_LIST)
const requestSetPoiTypeSelectedAction = createAction(actions.REQUEST_SET_POI_TYPE_SELECTED)

const setLicensePlateSelectedAction = createAction(actions.SET_LICENSE_PLATE_SELECTED)
const requestSetLicensePlateSelectedAction = createAction(actions.REQUEST_SET_LICENSE_PLATE_SELECTED)

const requestGetLocationAction = createAction(actions.REQUEST_GET_LOCATION)
const requestSetLocationAction = createAction(actions.REQUEST_SET_LOCATION)

const requestGetSuggestionsAction = createAction(actions.REQUEST_SET_SUGGESTIONS)
const setSuggestionsAction = createAction(actions.SET_SUGGESTIONS)

const requestGetTruckLocationsAction = createAction(actions.REQUEST_GET_LOCATIONS)
const setTruckLocationsAction = createAction(actions.SET_LOCATIONS)

const setMinimumDistanceAction = createAction(actions.SET_MINIMUM_DISTANCE)

const setNoLocationsAction = createAction(actions.SET_NO_LOCATIONS)

export {
    getPoiTypesAction,
    requestPoiTypesAction,
    requestGetLocationAction,
    requestGetSuggestionsAction,
    requestGetTruckLocationsAction,
    requestSetLicensePlateSelectedAction,
    requestSetLocationAction,
    requestSetPoiTypeSelectedAction,
    requestSetRadiusSelectedAction,
    requestSetRadiusListAction,
    setMinimumDistanceAction,
    setNoLocationsAction,
    setLicensePlateSelectedAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setRadiusSelectedAction,
    setRadiusListAction,
    setSuggestionsAction,
    setTruckLocationsAction
}