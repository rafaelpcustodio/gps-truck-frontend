import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import SelectPoiType from '../SelectPoiType'

describe('Tests for SelectPoiType component', () => {
    let store = {}
    let mockStore = {}

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <SelectPoiType
                    defaultConstant={''}
                    disabled={true}
                    onSelect={ jest.fn() }
                    options={['']}
                    selected={''}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
