import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMap from '../components/GoogleMap'

const Gps = props => {
    
    const {
        minimumDistance,
        noLocations,
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        radiusList,
        requestGetTruckLocationsAction,
        requestGetSuggestionsAction,
        requestPoiTypesAction,
        requestSetLicensePlateSelectedAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        suggestionsList,
        truckLocations
    } = props

    useEffect(() => {
        requestPoiTypesAction()
    }, [])
    
    return (
        <>
            <SearchBar
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
                requestPoiTypesAction={requestPoiTypesAction}
                requestGetTruckLocationsAction={requestGetTruckLocationsAction}
                requestSetRadiusSelectedAction={requestSetRadiusSelectedAction}
                requestSetPoiTypeSelectedAction={requestSetPoiTypeSelectedAction}
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                poiTypeList={poiTypeList}
                poiTypeSelected={poiTypeSelected}
                radiusSelected={radiusSelected}
                radiusList={radiusList}
                truckLocations={truckLocations}
            />
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