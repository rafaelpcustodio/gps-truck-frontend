import configureMockStore from 'redux-mock-store'
import { List, Map, Record } from 'immutable'
import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import Gps from '../Gps'

import Location from '../../../models/Location'
import Geometry from '../../../models/Geometry'

describe('Tests for Gps component', () => {
    let date = {}
    let item = {}
    let entryItems = []
    let mockStore = {}
    let restaurant = {}
    let turn = {}
    let store = {}
    let salesAreas = []

    beforeEach(() => {
        minimumDistance = new MinimumDistance({ refDate: '2018-10-15', statusOpen: 'y', statusPromo: 'y' })
        poiTypeSelected =  'Hotels'
        radiusSelected = '1000'
        radiusList = ['1000']
        location = { location: new Location({ lat: 1.453, lng: 1.453 })}
        suggestionsList = new Candidate({ geometry: new Geometry(location), name: 'Hotel', rating: 1, types: ['a','b'] })
        locationsLiss = [ new Location({ lat: 1.453, lng: 1.453 }) ]
        poiTypeList = [ 'Restaurants', 'Hotels' ]

        mockStore = configureMockStore()
        store = mockStore(Record({
            gpsReducers: Map({
                licensePlateSelected: 'ABC1234',
                minimumDistance: {},
                noLocations: false,
                poiTypeList: poiTypeList,
                poiTypeSelected: {},
                radiusList: [],
                radiusSelected: radiusSelected,
                suggestionsList: suggestionsList,
                locationsList: []
            })
        })())
    })

    it('Should render without crash', () => {
        setUser({
            name: 'Test',
            restaurants: [
                {
                    abv: 'abv',
                    text: 'Restaurantes...',
                    value: 1
                },
                {
                    abv: 'BGT',
                    text: 'STORE',
                    value: 18
                }
            ],
            username: 'test'
        })

        const match = {
            params: {
                category: 'sandwichessalads'
            }
        }

        const tree = renderer.create(
            <Provider store={ store }>
                <Gps
                    minimumDistance={minimumDistance}
                    poiTypeList={}
                    poiTypeSelected={}
                    radiusSelected={}
                    requestGetLocationsAction={ jest.fn() }
                    requestGetSuggestionsAction={ jest.fn() }
                    requestPoiTypesAction={ jest.fn() }
                    requestResetLocationsAction={ jest.fn() }
                    requestResetMinimumDistanceAction={ jest.fn() }
                    requestResetSuggestionsAction={ jest.fn() }
                    requestSetLicensePlateSelectedAction={ jest.fn() }
                    requestSetRadiusSelectedAction={ jest.fn() }
                    requestSetPoiTypeSelectedAction={ jest.fn() }
                    suggestionsList={}
                    locationsLiss={}
                />
            </Provider>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
