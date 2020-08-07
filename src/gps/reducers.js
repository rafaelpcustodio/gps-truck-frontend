import { handleActions } from 'redux-actions'

import { store } from './store'

import {
    getPoiTypesAction,
    resetLocationsAction,
    resetSuggestionsAction,
    setLicensePlateSelectedAction,
    resetMinimumDistanceAction,
    setLocationsAction,
    setRadiusSelectedAction,
    setPoiTypeSelectedAction,
    setPoiTypesListAction,
    setSuggestionsAction,
    setMinimumDistanceAction,
    setNoLocationsAction
} from './actions'

const reducers = handleActions({
    [getPoiTypesAction]: (state, { payload }) => state.merge({poiTypeList: payload}),
    [resetLocationsAction]:  state => state.merge({ locationsList: [] }),
    [resetMinimumDistanceAction]:  state => state.merge({ minimumDistance: [] }),
    [resetSuggestionsAction]:  state => state.merge({ suggestionsList: [] }),
    [setLicensePlateSelectedAction]: (state, { payload }) => state.set('licensePlateSelected', payload),
    [setMinimumDistanceAction]: (state, { payload }) => state.set('minimumDistance', payload),
    [setNoLocationsAction]: (state, { payload }) => state.set('noLocations', payload),
    [setPoiTypesListAction]: (state, { payload }) => state.set('poiTypeList', payload),
    [setPoiTypeSelectedAction]: (state, { payload }) => state.set('poiTypeSelected', payload),
    [setRadiusSelectedAction]: (state, { payload }) => state.set('radiusSelected', payload),
    [setSuggestionsAction]: (state, { payload }) => state.set('suggestionsList', payload),
    [setLocationsAction]: (state, { payload }) => state.set('locationsList', payload)
}, store);

export { reducers }