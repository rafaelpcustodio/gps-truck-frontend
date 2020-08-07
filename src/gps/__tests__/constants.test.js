import { actions } from '../constants'

describe('Tests for Gps constants', () => {

    it('Should return true when each action type match with your respective value', () => {
        expect(actions.GET_POY_TYPES_LIST).toEqual('GET_POY_TYPES_LIST')
        expect(actions.REQUEST_GET_LOCATIONS).toEqual('REQUEST_GET_LOCATIONS')
        expect(actions.REQUEST_GET_POI_TYPES_LIST).toEqual('REQUEST_GET_POI_TYPES_LIST')
        expect(actions.REQUEST_RESET_LOCATIONS).toEqual('REQUEST_RESET_LOCATIONS')
        expect(actions.REQUEST_RESET_MINIMUM_DISTACE).toEqual('REQUEST_RESET_MINIMUM_DISTACE')
        expect(actions.REQUEST_RESET_SUGGESTIONS).toEqual('REQUEST_RESET_SUGGESTIONS')
        expect(actions.REQUEST_SET_LICENSE_PLATE_SELECTED).toEqual('REQUEST_SET_LICENSE_PLATE_SELECTED')
        expect(actions.REQUEST_SET_NO_LOCATIONS).toEqual('REQUEST_SET_NO_LOCATIONS')
        expect(actions.REQUEST_SET_POI_TYPE_SELECTED).toEqual('REQUEST_SET_POI_TYPE_SELECTED')
        expect(actions.REQUEST_SET_POI_TYPES_LIST).toEqual('REQUEST_SET_POI_TYPES_LIST')
        expect(actions.REQUEST_SET_RADIUS_SELECTED).toEqual('REQUEST_SET_RADIUS_SELECTED')
        expect(actions.REQUEST_SET_SUGGESTIONS).toEqual('REQUEST_SET_SUGGESTIONS')
        expect(actions.RESET_LOCATIONS).toEqual('RESET_LOCATIONS')
        expect(actions.RESET_MINIMUM_DISTACE).toEqual('RESET_MINIMUM_DISTACE')
        expect(actions.RESET_SUGGESTIONS).toEqual('RESET_SUGGESTIONS')
        expect(actions.SET_LICENSE_PLATE_SELECTED).toEqual('SET_LICENSE_PLATE_SELECTED')
        expect(actions.SET_LOCATIONS).toEqual('SET_LOCATIONS')
        expect(actions.SET_MINIMUM_DISTANCE).toEqual('SET_MINIMUM_DISTANCE')
        expect(actions.SET_NO_LOCATIONS).toEqual('SET_NO_LOCATIONS')
        expect(actions.SET_POI_TYPE_SELECTED).toEqual('SET_POI_TYPE_SELECTED')
        expect(actions.SET_POI_TYPES_LIST).toEqual('SET_POI_TYPES_LIST')
        expect(actions.SET_RADIUS_SELECTED).toEqual('SET_RADIUS_SELECTED')
        expect(actions.SET_SUGGESTIONS).toEqual('SET_SUGGESTIONS')
    })

})