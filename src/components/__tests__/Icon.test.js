import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Icon from '../Icon'

describe('Tests for Icon component', () => {
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
                <Icon
                    className={''}
                    color={''}
                    icon={{'iconName': 'caret-down', 'prefix': 'fas', 'icon':[320,512]}}
                    size={''}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
