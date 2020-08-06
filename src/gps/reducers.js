import { handleActions } from 'redux-actions'
import { Record, List } from 'immutable'

import { store } from './store'

import {
    getPoiTypesAction,
    setLicensePlateSelectedAction,
    setTruckLocationsAction,
    setRadiusSelectedAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setSuggestionsAction,
    setMinimumDistanceAction,
    setNoLocationsAction
} from './actions'

const reducers = handleActions({
    [getPoiTypesAction]: (state, { payload }) => state.merge({
        poiTypeList: payload
    }),
    [setLicensePlateSelectedAction]: (state, { payload }) => state.set('licensePlateSelected', payload),
    [setMinimumDistanceAction]: (state, { payload }) => state.set('minimumDistance', payload),
    [setNoLocationsAction]: (state, { payload }) => state.set('noLocations', payload),
    [setPoiTypesListAction]: (state, { payload }) => state.set('poiTypeList', payload),
    [setPoiTypeSelectedAction]: (state, { payload }) => state.set('poiTypeSelected', payload),
    [setRadiusSelectedAction]: (state, { payload }) => state.set('radiusSelected', payload),
    [setSuggestionsAction]: (state, { payload }) => state.set('suggestionsList', payload),
    [setTruckLocationsAction]: (state, { payload }) => state.set('truckLocations', payload)
}, store);

export { reducers }