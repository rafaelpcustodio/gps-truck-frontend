import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Button from '../Button'

describe('Tests for Button component', () => {
    let store = {}
    let mockStore = {}
    let text = 'text'

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <Button
                    action={jest.fn()}
                    text={text}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
