import { Record } from 'immutable'

const store = Record({
    licensePlateSelected: '',
    minimumDistance: {},
    noLocations: false,
    poiTypeList: [],
    poiTypeSelected: '',
    radiusSelected: '',
    suggestionsList: [],
    locationsList: []
})();

export { store }