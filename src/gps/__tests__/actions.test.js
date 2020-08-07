import { actions } from '../constants'

import * as gpsActions from '../actions'

import { getAction } from '../../utils/actions'

import MinimumDistance from '../../models/MinimumDistance'

import Candidate from '../../models/suggestions/Candidate'
import Geometry from '../../models/suggestions/Geometry'

import Location from '../../models/Location'

describe('Tests for complete waste actions', () => {

    it('Dispatches getPoiTypesAction with the correct action and payload', () => {

        const type = getAction(actions.GET_POY_TYPES_LIST)

        expect(gpsActions.getPoiTypesAction()).toEqual({ type })
    })

    it('Dispatches requestGetLocationsAction with the correct action', () => {
        const type = getAction(actions.REQUEST_GET_LOCATIONS)

        expect(gpsActions.requestGetLocationsAction()).toEqual({ type })
    })

    it('Dispatches requestGetSuggestionsAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_SET_SUGGESTIONS)

        expect(gpsActions.requestGetSuggestionsAction()).toEqual({ type })
    })

    it('Dispatches requestPoiTypesAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_GET_POI_TYPES_LIST)

        expect(gpsActions.requestPoiTypesAction()).toEqual({ type })
    })

    it('Dispatches requestResetLocationsAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_RESET_LOCATIONS)

        expect(gpsActions.requestResetLocationsAction()).toEqual({ type })
    })

    it('Dispatches requestResetMinimumDistanceAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_RESET_MINIMUM_DISTACE)

        expect(gpsActions.requestResetMinimumDistanceAction()).toEqual({ type })
    })

    it('Dispatches requestResetSuggestionsAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_RESET_SUGGESTIONS)

        expect(gpsActions.requestResetSuggestionsAction()).toEqual({ type })
    })

    it('Dispatches requestSetLicensePlateSelectedAction with the correct action and payload', () => {

        const type = getAction(actions.REQUEST_SET_LICENSE_PLATE_SELECTED)

        expect(gpsActions.requestSetLicensePlateSelectedAction()).toEqual({ type })
    })

    it('Dispatches requestSetNoLocationsAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_SET_NO_LOCATIONS)

        expect(gpsActions.requestSetNoLocationsAction()).toEqual({ type })
    })

    it('Dispatches requestSetPoiTypesAction with the correct action', () => {
        const type = getAction(actions.REQUEST_SET_POI_TYPES_LIST)

        expect(gpsActions.requestSetPoiTypesAction()).toEqual({ type })
    })

    it('Dispatches requestSetPoiTypeSelectedAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_SET_POI_TYPE_SELECTED)

        expect(gpsActions.requestSetPoiTypeSelectedAction()).toEqual({ type })
    })

    it('Dispatches requestSetRadiusSelectedAction with the correct action and payload', () => {
        const type = getAction(actions.REQUEST_SET_RADIUS_SELECTED)

        expect(gpsActions.requestSetRadiusSelectedAction()).toEqual({ type })
    })

    it('Dispatches resetLocationsAction with the correct action and payload', () => {
        const payload = []
        const type = getAction(actions.RESET_LOCATIONS)

        expect(gpsActions.resetLocationsAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches resetMinimumDistanceAction with the correct action and payload', () => {
        const payload = {}
        const type = getAction(actions.RESET_MINIMUM_DISTACE)

        expect(gpsActions.resetMinimumDistanceAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches resetSuggestionsAction with the correct action and payload', () => {
        const payload = []
        const type = getAction(actions.RESET_SUGGESTIONS)

        expect(gpsActions.resetSuggestionsAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setLicensePlateSelectedAction with the correct action and payload', () => {
        const payload = 'ABC1234'

        const type = getAction(actions.SET_LICENSE_PLATE_SELECTED)

        expect(gpsActions.setLicensePlateSelectedAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setLocationsAction with the correct action and payload', () => {
        const payload = [ new Location({ latitude: 1.453, longitude: 1.453 }) ]

        const type = getAction(actions.SET_LOCATIONS)

        expect(gpsActions.setLocationsAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setMinimumDistanceAction with the correct action and payload', () => {
        const payload = new MinimumDistance({location:{ latitude: 1.453, longitude: 1.453 }, minimumDistance: 400})

        const type = getAction(actions.SET_MINIMUM_DISTANCE)

        expect(gpsActions.setMinimumDistanceAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setNoLocationsAction with the correct action and payload', () => {
        const payload = true
        const type = getAction(actions.SET_NO_LOCATIONS)

        expect(gpsActions.setNoLocationsAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setPoiTypesListAction with the correct action and payload', () => {
        const payload = ['Restaurants']
        const type = getAction(actions.SET_POI_TYPES_LIST)

        expect(gpsActions.setPoiTypesListAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setPoiTypeSelectedAction with the correct action and payload', () => {
        const payload = 'Restaurants'
        const type = getAction(actions.SET_POI_TYPE_SELECTED)

        expect(gpsActions.setPoiTypeSelectedAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setRadiusSelectedAction with the correct action and payload', () => {
        const payload = '1000'
        const type = getAction(actions.SET_RADIUS_SELECTED)

        expect(gpsActions.setRadiusSelectedAction(payload)).toEqual({ payload, type })
    })

    it('Dispatches setSuggestionsAction with the correct action and payload', () => {
        const location = new Location({ latitude: 1.453, longitude: 1.453 })
        const payload = [ new Candidate({ geometry: new Geometry(location), name: 'Hotel', rating: 1, types: ['a','b'] }) ]
        const type = getAction(actions.SET_SUGGESTIONS)

        expect(gpsActions.setSuggestionsAction(payload)).toEqual({ payload, type })
    })

})