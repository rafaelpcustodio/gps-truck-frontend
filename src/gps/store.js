import { Record } from 'immutable';

const store = Record({
    licensePlateSelected: {},
    truckLocations: [],
    poiTypeList: [],
    poiTypeSelected: {},
    minimumDistance: {},
    radiusList: [],
    radiusSelected: {},
    suggestionsList: []
})();

export { store }