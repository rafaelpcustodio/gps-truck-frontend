import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Radius from '../Radius'

describe('Tests for PoiType component', () => {
    let store = {}
    let mockStore = {}
    let radiusSelected = ''
    let radiusList = ['1000', '2000']

    beforeEach(() => {
        radiusSelected =  '1000'
    })

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
                licensePlateSelected: 'ABC1234',
                minimumDistance: {},
                noLocations: false,
                poiTypeList: [],
                poiTypeSelected: '',
                radiusSelected: radiusSelected,
                suggestionsList: [],
                locationsList: []
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <Radius
                    defaultConstant={''}
                    disableDropDown={true}
                    options={radiusList}
                    onSelect={jest.fn()}
                    selected={radiusSelected}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
