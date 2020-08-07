import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import SelectRadiusContainer from '../SelectRadiusContainer'

describe('Tests for SelectRadiusContainer component', () => {
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
                <SelectRadiusContainer
                    expanded={true}
                    disabled={true}
                    onClick={ jest.fn() }
                    hasCaret={true}
                    optionSelected={''}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})