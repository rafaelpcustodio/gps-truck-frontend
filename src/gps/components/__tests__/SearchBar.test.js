import configureMockStore from 'redux-mock-store'
import { Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import MinimumDistance from '../../../models/MinimumDistance'
import Candidate from '../../../models/suggestions/Candidate'

import SearchBar from '../SearchBar'

import Location from '../../../models/Location'
import Geometry from '../../../models/suggestions/Geometry'

describe('Tests for SearchBar component', () => {
    let minimumDistance = {}
    let poiTypeSelected = ''
    let radiusSelected = ''
    let radiusList = []
    let location = {}
    let suggestionsList = {}
    let locationsList = []
    let poiTypeList = []
    let store = {}
    let mockStore = {}
    
    jest.mock('../_assets/icn-restaurant.png')
    jest.mock('../_assets/icn-hotel.png')
    jest.mock('../_assets/icn-hotel-restaurant.png')
    jest.mock('../_assets/icn-gas-station.png')
    jest.mock('../_assets/icn-gas-station.png')
    jest.mock('@fortawesome/react-fontawesome', () => ({
        FontAwesomeIcon: ''
    }))

    beforeEach(() => {
        minimumDistance = new MinimumDistance({location:{ latitude: 1.453, longitude: 1.453 }, minimumDistance: 400})
        poiTypeSelected =  'Hotels'
        radiusSelected = '1000'
        radiusList = ['1000']
        location = new Location({ latitude: 1.453, longitude: 1.453 })
        suggestionsList = new Candidate({ geometry: new Geometry(location), name: 'Hotel', rating: 1, types: ['a','b'] })
        locationsList = [ new Location({ latitude: 1.453, longitude: 1.453 }) ]
        poiTypeList = [ 'Restaurants', 'Hotels' ]
    })

    it('Should render without crash', () => {
        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
                licensePlateSelected: 'ABC1234',
                minimumDistance: minimumDistance,
                noLocations: false,
                poiTypeList: poiTypeList,
                poiTypeSelected: 'Restaurants',
                radiusList: radiusList,
                radiusSelected: poiTypeSelected,
                suggestionsList: suggestionsList,
                locationsList: locationsList
            })
        })())

        const tree = renderer.create(
            <Provider store={ store }>
                <SearchBar
                    poiTypeList={poiTypeList}
                    poiTypeSelected={poiTypeSelected}
                    radiusSelected={radiusSelected}
                    requestPoiTypesAction={ jest.fn() }
                    requestSetRadiusSelectedAction={ jest.fn() }
                    requestResetLocationsAction={ jest.fn() }
                    requestResetMinimumDistanceAction={ jest.fn() }
                    requestResetSuggestionsAction={ jest.fn() }
                    requestSetPoiTypeSelectedAction={ jest.fn() }
                    requestSetLicensePlateSelectedAction={ jest.fn() }
                    requestGetSuggestionsAction={ jest.fn() }
                    requestGetLocationsAction={ jest.fn() }
                    locationsList={locationsList}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
