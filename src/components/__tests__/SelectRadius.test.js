import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import SelectRadius from '../SelectRadius'

import { library } from '@fortawesome/react-fontawesome'

describe('Tests for SelectRadius component', () => {
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
                <SelectRadius
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
