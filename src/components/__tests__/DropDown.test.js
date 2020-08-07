import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import DropDown from '../DropDown'

describe('Tests for DrowDown component', () => {
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
                <DropDown
                    dark={true}
                    disabled={false} 
                    expanded={false}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
