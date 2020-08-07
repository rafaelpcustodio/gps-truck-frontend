import { store } from '../store'

describe('Tests for Gps store', () => {

    it('Smoke tests', () => {
        const initialStore = store.toJS()
        expect(initialStore.licensePlateSelected).toEqual('')
        expect(initialStore.minimumDistance).toEqual({})
        expect(initialStore.noLocations).toEqual(false)
        expect(initialStore.poiTypeList).toEqual([])
        expect(initialStore.poiTypeSelected).toEqual('')
        expect(initialStore.radiusSelected).toEqual('')
        expect(initialStore.suggestionsList).toEqual([])
        expect(initialStore.locationsList).toEqual([])
    })
})