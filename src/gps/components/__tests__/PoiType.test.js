import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import PoiType from '../PoiType'

describe('Tests for PoiType component', () => {
    let store = {}
    let mockStore = {}
    let poiTypeSelected =''
    let poiTypeList = []

    beforeEach(() => {
        poiTypeSelected =  'Hotels'
        poiTypeList = [ 'Restaurants', 'Hotels' ]
    })

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
                licensePlateSelected: 'ABC1234',
                minimumDistance: {},
                noLocations: false,
                poiTypeList: poiTypeList,
                poiTypeSelected: poiTypeSelected,
                radiusList: [],
                radiusSelected: '',
                suggestionsList: [],
                locationsList: []
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <PoiType
                    defaultConstant={''}
                    disableDropDown={true}
                    options={poiTypeList}
                    onSelect={jest.fn()}
                    selected={poiTypeSelected}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
