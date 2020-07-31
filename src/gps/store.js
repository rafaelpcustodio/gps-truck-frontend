import { List, Record } from 'immutable';

const store = Record({
    licensePlateSelected: {},
    truckLocations: [],
    poiTypeList: [],
    poiTypeSelected: {},
    radiusList: [],
    radiusSelected: {},
    suggestions: []
})();

export { store }