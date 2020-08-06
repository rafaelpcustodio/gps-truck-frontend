import { Record } from 'immutable'

const store = Record({
    licensePlateSelected: {},
    minimumDistance: {},
    noLocations: false,
    poiTypeList: [],
    poiTypeSelected: {},
    radiusList: [],
    radiusSelected: {},
    suggestionsList: [],
    truckLocations: []
})();

export { store }