import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import SelectItem from '../SelectItem'

describe('Tests for SelectItem component', () => {
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
                <SelectItem
                    option={''}
                    onClick={ jest.fn() }
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
