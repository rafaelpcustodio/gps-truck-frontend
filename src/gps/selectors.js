import { createSelector } from 'reselect'
const REDUCER_NAME = 'gpsReducers'

const getMinimumDistance = state => state.get(REDUCER_NAME).get('minimumDistance')

const getPoitypeList = state => state.get(REDUCER_NAME).get('poiTypeList')

const getSelectedPoiType = state => state.get(REDUCER_NAME).get('poiTypeSelected')

const getSelectedRadius = state => state.get(REDUCER_NAME).get('radiusSelected')

const getSelectedLicensePlate = state => state.get(REDUCER_NAME).get('licensePlateSelected')

const getSuggestionsList = state => state.get(REDUCER_NAME).get('suggestionsList')

const getLocationsList = state => state.get(REDUCER_NAME).get('locationsList')

const getNoLocations = state => state.get(REDUCER_NAME).get('noLocations')

const getNoLocationsSelector = createSelector(
    getNoLocations,
    noLocations => noLocations
);

const getLicensePlateSelectedSelector = createSelector(
    getSelectedLicensePlate,
    licensePlateSelected => licensePlateSelected
);

const getListPoiTypeSelector = createSelector(
    getPoitypeList,
    poiTypeList => poiTypeList
);

const getMinimumDistanceSelector = createSelector(
    getMinimumDistance,
    minimumDistance => minimumDistance
);

const getPoiTypeSelectedSelector = createSelector(
    getSelectedPoiType,
    poiTypeSelected => poiTypeSelected
);

const getRadiusSelectedSelector = createSelector(
    getSelectedRadius,
    radiusSelected => radiusSelected
);

const getSuggestionsListSelector = createSelector(
    getSuggestionsList,
    suggestionsList => suggestionsList
);


const getLocationsListSelector = createSelector(
    getLocationsList,
    locations => locations
);

export {
    getLicensePlateSelectedSelector,
    getListPoiTypeSelector,
    getMinimumDistanceSelector,
    getNoLocationsSelector,
    getPoiTypeSelectedSelector,
    getRadiusSelectedSelector,
    getSuggestionsListSelector,
    getLocationsListSelector
}