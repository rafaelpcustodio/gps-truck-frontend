import { actions } from './constants'

import { createAction } from '../utils/actions'

const getPoiTypesAction = createAction(actions.GET_POY_TYPES_LIST)
const requestGetLocationsAction = createAction(actions.REQUEST_GET_LOCATIONS)
const requestGetSuggestionsAction = createAction(actions.REQUEST_SET_SUGGESTIONS)
const requestPoiTypesAction = createAction(actions.REQUEST_GET_POI_TYPES_LIST)
const requestResetLocationsAction = createAction(actions.REQUEST_RESET_LOCATIONS)
const requestResetMinimumDistanceAction = createAction(actions.REQUEST_RESET_MINIMUM_DISTACE)
const requestResetSuggestionsAction = createAction(actions.REQUEST_RESET_SUGGESTIONS)
const requestSetLicensePlateSelectedAction = createAction(actions.REQUEST_SET_LICENSE_PLATE_SELECTED)
const requestSetNoLocationsAction = createAction(actions.REQUEST_SET_NO_LOCATIONS)
const requestSetPoiTypesAction = createAction(actions.REQUEST_SET_POI_TYPES_LIST)
const requestSetPoiTypeSelectedAction = createAction(actions.REQUEST_SET_POI_TYPE_SELECTED)
const requestSetRadiusSelectedAction = createAction(actions.REQUEST_SET_RADIUS_SELECTED)
const resetLocationsAction = createAction(actions.RESET_LOCATIONS)
const resetMinimumDistanceAction = createAction(actions.RESET_MINIMUM_DISTACE)
const resetSuggestionsAction = createAction(actions.RESET_SUGGESTIONS)
const setLicensePlateSelectedAction = createAction(actions.SET_LICENSE_PLATE_SELECTED)
const setLocationsAction = createAction(actions.SET_LOCATIONS)
const setMinimumDistanceAction = createAction(actions.SET_MINIMUM_DISTANCE)
const setNoLocationsAction = createAction(actions.SET_NO_LOCATIONS)
const setPoiTypesListAction = createAction(actions.SET_POI_TYPES_LIST)
const setPoiTypeSelectedAction = createAction(actions.SET_POI_TYPE_SELECTED)
const setRadiusSelectedAction = createAction(actions.SET_RADIUS_SELECTED)
const setSuggestionsAction = createAction(actions.SET_SUGGESTIONS)

export {
    getPoiTypesAction,
    requestPoiTypesAction,
    requestGetSuggestionsAction,
    requestGetLocationsAction,
    requestSetLicensePlateSelectedAction,
    requestResetLocationsAction,
    requestResetMinimumDistanceAction,
    requestResetSuggestionsAction,
    requestSetNoLocationsAction,
    requestSetPoiTypesAction,
    requestSetPoiTypeSelectedAction,
    requestSetRadiusSelectedAction,
    resetSuggestionsAction,
    resetLocationsAction,
    resetMinimumDistanceAction,
    setMinimumDistanceAction,
    setNoLocationsAction,
    setLicensePlateSelectedAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setRadiusSelectedAction,
    setSuggestionsAction,
    setLocationsAction
}