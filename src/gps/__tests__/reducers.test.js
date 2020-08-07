import { Record } from 'immutable'

import { reducers } from '../reducers'

import * as gpsActions from '../actions'

import Candidate from '../../models/suggestions/Candidate'

import Geometry from '../../models/suggestions/Geometry'

import MinimumDistance from '../../models/MinimumDistance'

import Location from '../../models/Location'

describe('Tests for gps reducers', () => {

    let minimumDistance = {}
    let poiTypeSelected = ''
    let radiusSelected = ''
    let location = {}
    let suggestionsList = {}
    let locationsList = []
    let poiTypeList = []
    let store = {}

    beforeEach(() => {
        minimumDistance = new MinimumDistance({location:{ latitude: 1.453, longitude: 1.453 }, minimumDistance: 400})
        poiTypeSelected =  'Hotels'
        radiusSelected = '1000'
        location = new Location({ latitude: 1.453, longitude: 1.453 })
        suggestionsList = new Candidate({ geometry: new Geometry(location), name: 'Hotel', rating: 1, types: ['a','b'] })
        locationsList = [ new Location({ latitude: 1.453, longitude: 1.453 }) ]
        poiTypeList = [ 'Restaurants', 'Hotels' ]

        store = Record({
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => 'I\'m a unknown action'
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: {},
            noLocations: false,
            poiTypeList: [],
            poiTypeSelected: '',
            radiusSelected: '',
            suggestionsList: [],
            locationsList: []
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a radius selected and return a store setRadiusSelectedAction', () => {
        const payload = '2000'

        const reducerStore = reducers(store, gpsActions.setRadiusSelectedAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: payload,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should reset suggestions and return a store with licensePlate, poiType and radiusSelected', () => {
        const payload = []

        const reducerStore = reducers(store, gpsActions.resetSuggestionsAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: payload,
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a license plate selected and return a store setMinimumDistanceAction', () => {
        const payload = 'ABC1234'

        const reducerStore = reducers(store, gpsActions.setLicensePlateSelectedAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: payload,
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a minimum distance selected and return a store setMinimumDistanceAction', () => {
        const payload = new MinimumDistance({location:{ latitude: 1.455, longitude: 1.451 }, minimumDistance: 200})

        const reducerStore = reducers(store, gpsActions.setMinimumDistanceAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: payload,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })


    it('Should select a poiType selected and return a store setPoiTypeSelectedAction', () => {
        const payload = 'Tests'

        const reducerStore = reducers(store, gpsActions.setPoiTypeSelectedAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: payload,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a noLocations selected and return a store setNoLocationsAction', () => {
        const payload = true

        const reducerStore = reducers(store, gpsActions.setNoLocationsAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: payload,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a poi types and return a store setPoiTypesListAction', () => {
        const payload = ['A','B']

        const reducerStore = reducers(store, gpsActions.setPoiTypesListAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: payload,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should select a suggestions and return a store setSuggestionsAction', () => {
        const payload = suggestionsList = new Candidate({ geometry: new Geometry(location), name: 'Restaurants', rating: 1, types: ['c','d'] })

        const reducerStore = reducers(store, gpsActions.setSuggestionsAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: payload,
            locationsList: locationsList
        }

        expect(reducerStore).toEqual(expectedStore)
    })


    it('Should select a locations and return a store setLocationsAction', () => {
        const payload = locationsList = [ new Location({ latitude: 1.2, longitude: -1.453 }) ]

        const reducerStore = reducers(store, gpsActions.setLocationsAction(payload)).toJS()
        const expectedStore = {
            licensePlateSelected: '',
            minimumDistance: minimumDistance,
            noLocations: false,
            poiTypeList: poiTypeList,
            poiTypeSelected: poiTypeSelected,
            radiusSelected: radiusSelected,
            suggestionsList: [],
            locationsList: payload
        }

        expect(reducerStore).toEqual(expectedStore)
    })

})
