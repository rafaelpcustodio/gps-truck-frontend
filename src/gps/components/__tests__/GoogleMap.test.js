import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import MinimumDistance from '../../../models/MinimumDistance'
import Candidate from '../../../models/suggestions/Candidate'

import GoogleMap from '../GoogleMap'

import Location from '../../../models/Location'
import Geometry from '../../../models/suggestions/Geometry'

describe('Tests for GoogleMap component', () => {
    let minimumDistance = {}
    let location = {}
    let suggestionsList = {}
    let locationsList = []
    let store = {}
    let mockStore = {}

    beforeEach(() => {
        minimumDistance = new MinimumDistance({location:{ latitude: 1.453, longitude: 1.453 }, minimumDistance: 400})
        suggestionsList = new Candidate({ geometry: new Geometry(location), name: 'Hotel', rating: 1, types: ['a','b'] })
        locationsList = [ new Location({ lat: 1.453, lng: 1.453 }) ]
    })

    jest.mock('../_assets/icn-restaurant.png')
    jest.mock('../_assets/icn-hotel.png')
    jest.mock('../_assets/icn-hotel-restaurant.png')
    jest.mock('../_assets/icn-gas-station.png')
    jest.mock('../_assets/icn-gas-station.png')
    jest.mock('@fortawesome/react-fontawesome', () => ({
        FontAwesomeIcon: ''
    }))

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
                licensePlateSelected: 'ABC1234',
                minimumDistance: {},
                noLocations: false,
                poiTypeList: [],
                poiTypeSelected: '',
                radiusList: [],
                radiusSelected: '',
                suggestionsList: suggestionsList,
                locationsList: locationsList
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <GoogleMap
                    requestGetSuggestionsAction={jest.fn()}
                    minimumDistance={minimumDistance}s
                    locationsList={locationsList}
                    suggestionsList={suggestionsList}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
