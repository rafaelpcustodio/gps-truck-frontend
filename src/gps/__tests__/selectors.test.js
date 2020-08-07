import { Record } from 'immutable'

import * as gpsSelectors from '../selectors'

import { store } from '../store'

describe('Tests for Gps selectors', () => {

    let mockedStore = null

    beforeEach(() => {
        mockedStore = Record({
            gpsReducers: store
        })()
    })

    it('Should return an empty object when get initial noLocations selected', () => {
        const initialClassifications = gpsSelectors.getNoLocationsSelector(mockedStore)
        expect(initialClassifications).toEqual(false)
    })

    it('Should return an empty array when get initial LicensePlate selected', () => {
        const initialClassifications = gpsSelectors.getLicensePlateSelectedSelector(mockedStore)
        expect(initialClassifications).toEqual('')
    })

    it('Should return an empty array when get initial poiTypes selected', () => {
        const initialClassifications = gpsSelectors.getListPoiTypeSelector(mockedStore)
        expect(initialClassifications).toEqual([])
    })

    it('Should return an false boolean when get initial minimum Distance send defined', () => {
        const initialClassifications = gpsSelectors.getMinimumDistanceSelector(mockedStore)
        expect(initialClassifications).toEqual({})
    })

    it('Should return an false boolean when get initial poiType selected send defined', () => {
        const initialClassifications = gpsSelectors.getPoiTypeSelectedSelector(mockedStore)
        expect(initialClassifications).toEqual('')
    })
    it('Should return an false boolean when get initial radius Selected send defined', () => {
        const initialClassifications = gpsSelectors.getRadiusSelectedSelector(mockedStore)
        expect(initialClassifications).toEqual('')
    })
    it('Should return an false boolean when get initial segguestions list send defined', () => {
        const initialClassifications = gpsSelectors.getSuggestionsListSelector(mockedStore)
        expect(initialClassifications).toEqual([])
    })
    it('Should return an false boolean when get initial locations list send defined', () => {
        const initialClassifications = gpsSelectors.getLocationsListSelector(mockedStore)
        expect(initialClassifications).toEqual([])
    })

})