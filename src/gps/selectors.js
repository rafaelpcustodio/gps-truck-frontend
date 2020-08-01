import { createSelector } from 'reselect';
const REDUCER_NAME = 'gpsReducers';

const getRadiusList = state => state.get(REDUCER_NAME).get('radiusList');

const getPoitypeList = state => state.get(REDUCER_NAME).get('poiTypeList');

const getSelectedPoiType = state => state.get(REDUCER_NAME).get('poiTypeSelected');

const getSelectedRadius = state => state.get(REDUCER_NAME).get('radiusSelected');

const getSelectedLicensePlate = state => state.get(REDUCER_NAME).get('licensePlateSelected');

const getTruckLocationsList = state => state.get(REDUCER_NAME).get('truckLocations');

const getSuggestionsList = state => state.get(REDUCER_NAME).get('suggestionsList');

const getSuggestionsListSelector = createSelector(
    getSuggestionsList,
    suggestionsList => suggestionsList
);


const getTruckLocationsListSelector = createSelector(
    getTruckLocationsList,
    truckLocations => truckLocations
);

const getLicensePlateSelectedSelector = createSelector(
    getSelectedLicensePlate,
    licensePlateSelected => licensePlateSelected
);

const getRadiusSelectedSelector = createSelector(
    getSelectedRadius,
    radiusSelected => radiusSelected
);

const getPoiTypeSelectedSelector = createSelector(
    getSelectedPoiType,
    poiTypeSelected => poiTypeSelected
);

const getListRadiusSelector = createSelector(
    getRadiusList,
    radiusList => radiusList
);

const getListPoiTypeSelector = createSelector(
    getPoitypeList,
    poiTypeList => poiTypeList
);

export {
    getLicensePlateSelectedSelector,
    getListPoiTypeSelector,
    getListRadiusSelector,
    getTruckLocationsListSelector,
    getRadiusSelectedSelector,
    getPoiTypeSelectedSelector,
    getSuggestionsListSelector,
}