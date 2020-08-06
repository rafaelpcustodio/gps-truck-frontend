import { Record } from 'immutable'

const store = Record({
    licensePlateSelected: {},
    minimumDistance: {},
    noLocation: false,
    poiTypeList: [],
    poiTypeSelected: {},
    radiusList: [],
    radiusSelected: {},
    suggestionsList: [],
    truckLocations: []
})();

export { store }