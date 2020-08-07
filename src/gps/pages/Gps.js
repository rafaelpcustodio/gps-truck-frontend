import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMap from '../components/GoogleMap'

import  MinimumDistance from '../components/MinimumDistance'

import InformBox from '../../components/InformBox'

import { isNotEmpty } from '../../utils/functions'

import Candidate from '../../models/suggestions/Candidate'
import Location from '../../models/Location'

const Gps = props => {
    
    const {
        minimumDistance,
        noLocations,
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        requestGetLocationsAction,
        requestGetSuggestionsAction,
        requestPoiTypesAction,
        requestResetLocationsAction,
        requestResetMinimumDistanceAction,
        requestResetSuggestionsAction,
        requestSetLicensePlateSelectedAction,
        requestSetNoLocationsAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        suggestionsList,
        locationsList
    } = props
    
    useEffect(() => {
        requestPoiTypesAction()
    }, [requestPoiTypesAction])

    return (
        <>
            {(
            noLocations && 
                <InformBox 
                    requestSetNoLocationsAction={requestSetNoLocationsAction}
                    noLocations={noLocations} 
                />
            )}
            <SearchBar
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
                requestPoiTypesAction={requestPoiTypesAction}
                requestGetLocationsAction={requestGetLocationsAction}
                requestResetLocationsAction={requestResetLocationsAction}
                requestResetMinimumDistanceAction={requestResetMinimumDistanceAction}
                requestResetSuggestionsAction={requestResetSuggestionsAction}
                requestSetRadiusSelectedAction={requestSetRadiusSelectedAction}
                requestSetPoiTypeSelectedAction={requestSetPoiTypeSelectedAction}
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                poiTypeList={poiTypeList}
                poiTypeSelected={poiTypeSelected}
                radiusSelected={radiusSelected}
                locationsList={locationsList}
            />
            {(
            isNotEmpty(minimumDistance) && 
                <MinimumDistance distance={minimumDistance.distance}/>
            )}
            <GoogleMap
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                minimumDistance={minimumDistance}s
                locationsList={locationsList}
                suggestionsList={suggestionsList}
            />
        </>
    );
}

Gps.defaultProps = {
    poiTypeList: [],
    requestGetTruckLocationsAction: null,
    requestGetSuggestionsAction: null,
    requestPoiTypesAction: null,
    requestSetLicensePlateSelectedAction: null,
    requestSetRadiusSelectedAction: null,
    requestSetPoiTypeSelectedAction: null,
}

Gps.protoTypes = {
    minimumDistance: PropTypes.string,
    poiTypeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    poiTypeSelected: PropTypes.string,
    radiusSelected: PropTypes.string,
    requestGetTruckLocationsAction: PropTypes.func.isRequired,
    requestGetSuggestionsAction: PropTypes.func.isRequired,
    requestPoiTypesAction: PropTypes.func.isRequired,
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired,
    requestSetRadiusSelectedAction: PropTypes.func.isRequired,
    requestSetPoiTypeSelectedAction: PropTypes.func.isRequired,
    suggestionsList: PropTypes.arrayOf(PropTypes.objectOf(Candidate)),
    locationsList: PropTypes.arrayOf(PropTypes.objectOf(Location)),
}

export default Gps