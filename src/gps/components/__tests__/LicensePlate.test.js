import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import LicensePlate from '../GoogleMap'

describe('Tests for License Plate component', () => {
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
                <LicensePlate
                    handleText={jest.fn()}
                    requestSetLicensePlateSelectedAction={jest.fn()}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
