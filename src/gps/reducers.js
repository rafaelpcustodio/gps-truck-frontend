import { handleActions } from 'redux-actions';
import {  Map } from 'immutable';

import { store } from './store';

import {
    getRadiusAction,
    getPoiTypesAction,
    setLicensePlateSelectedAction,
    setTruckLocationsAction,
    setRadiusSelectedAction,
    setPoiTypeSelectedAction,
    setSuggestionsAction,
    setMinimumDistanceAction
} from './actions';

const reducers = handleActions({
    [getPoiTypesAction]: (state, { payload }) => state.merge({
        poiTypeList: payload
    }),
    [getRadiusAction]: (state, { payload }) => state.merge({
        radiusList: payload
    }),
    [setLicensePlateSelectedAction]: (state, { payload }) => state.set('licensePlateSelected', payload)
    ,
    [setMinimumDistanceAction]: (state, { payload }) => state.set('minimumDistance', payload),
    [setRadiusSelectedAction]: (state, { payload }) => state.set('radiusSelected', payload)
    ,
    [setPoiTypeSelectedAction]: (state, { payload }) => state.set('poiTypeSelected', payload),
    [setTruckLocationsAction]: (state, { payload }) => state.set('truckLocations', payload),
    [setSuggestionsAction]: (state, { payload }) => state.set('suggestionsList', payload)
}, store);

export { reducers }