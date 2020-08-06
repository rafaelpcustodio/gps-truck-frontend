import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMap from '../components/GoogleMap'

import  MinimumDistance from '../components/MinimumDistance'

import { isNotEmpty } from '../../utils/functions'

const Gps = props => {
    
    const {
        minimumDistance,
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        requestGetTruckLocationsAction,
        requestGetSuggestionsAction,
        requestPoiTypesAction,
        requestResetLocationsAction,
        requestResetMinimumDistanceAction,
        requestResetSuggestionsAction,
        requestSetLicensePlateSelectedAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        suggestionsList,
        truckLocations
    } = props

    useEffect(() => {
        requestPoiTypesAction()
    }, [])
    console.log(minimumDistance.distance)
    return (
        <>
            <SearchBar
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
                requestPoiTypesAction={requestPoiTypesAction}
                requestGetTruckLocationsAction={requestGetTruckLocationsAction}
                requestResetLocationsAction={requestResetLocationsAction}
                requestResetMinimumDistanceAction={requestResetMinimumDistanceAction}
                requestResetSuggestionsAction={requestResetSuggestionsAction}
                requestSetRadiusSelectedAction={requestSetRadiusSelectedAction}
                requestSetPoiTypeSelectedAction={requestSetPoiTypeSelectedAction}
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                poiTypeList={poiTypeList}
                poiTypeSelected={poiTypeSelected}
                radiusSelected={radiusSelected}
                truckLocations={truckLocations}
            />
            {
                (
                    isNotEmpty(minimumDistance) && 
                        <MinimumDistance distance={minimumDistance.distance}/>
                )
            }
            <GoogleMap
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                minimumDistance={minimumDistance}s
                truckLocations={truckLocations}
                suggestionsList={suggestionsList}
            />
        </>
    );
}

Gps.defaultProps = {
    poiTypeList: [],
    radiusList: [],
    requestGetTruckLocationsAction: null,
    requestGetSuggestionsAction: null,
    requestPoiTypesAction: null,
    requestRadiusAction: null,
    requestSetLicensePlateSelectedAction: null,
    requestSetRadiusSelectedAction: null,
    requestSetPoiTypeSelectedAction: null,
}

Gps.protoTypes = {
    minimumDistance: PropTypes.string,
    poiTypeList: PropTypes.arrayOf(PropTypes.object).isRequired,
    poiTypeSelected: PropTypes.object,
    radiusSelected: PropTypes.object,
    radiusList: PropTypes.arrayOf(PropTypes.object).isRequired,
    requestGetTruckLocationsAction: PropTypes.func.isRequired,
    requestGetSuggestionsAction: PropTypes.func.isRequired,
    requestPoiTypesAction: PropTypes.func.isRequired,
    requestRadiusAction: PropTypes.func.isRequired,
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired,
    requestSetRadiusSelectedAction: PropTypes.func.isRequired,
    requestSetPoiTypeSelectedAction: PropTypes.func.isRequired,
    suggestionsList: PropTypes.arrayOf(PropTypes.object),
    truckLocations: PropTypes.arrayOf(PropTypes.object),
}

export default Gps