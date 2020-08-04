import React, { useEffect, useState } from 'react'
import { Map, GoogleApiWrapper, Marker, Polyline, SymbolPath } from 'google-maps-react'
import SearchBar from '../components/SearchBar'
import truckMarker from '../../_assets/img/icn-current-location.png'
import pathMarker from '../../_assets/img/icn-path.png'
import firstLocationMarker from '../../_assets/img/icn-first-location.png'
import MinimumDistance from '../components/MinimumDistance'
import arrowUp from '../../_assets/img/icn-arrow-up.png'

const mapStyles = {
    width: '100%',
    height: '100%',
  };

const Gps = props => {
    const {
        minimumDistance,
        licensePlateSelected,
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        radiusList,
        requestGetTruckLocationsAction,
        requestGetSuggestionsAction,
        requestPoiTypesAction,
        requestRadiusAction,
        requestSetLicensePlateSelectedAction,
        requestSetLocationAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        suggestionsList,
        truckLocations
    } = props

    useEffect(() => {
        requestPoiTypesAction()
        requestRadiusAction()
    }, [])
    
    return (
        <>
            <SearchBar
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
                requestPoiTypesAction={requestPoiTypesAction}
                requestRadiusAction={requestRadiusAction}
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
            {
                minimumDistance && (
                    <MinimumDistance distance={minimumDistance}/> 
                )
            }
            <Map
                google={props.google}
                disableDefaultUI={true}
                zoom={16}
                style={mapStyles}
                center={truckLocations[0]}
            >
                {
                    truckLocations[0] &&
                    ( 
                        <Marker 
                            icon={truckMarker}
                            position={truckLocations[0]}
                        />
                    ) 
                }
                {
                    minimumDistance && (
                        <Polyline 
                            geodesic={true}
                            strokeColor={'#32B3C3'}
                            strokeOpacity={1.0}
                            strokeWeight={2}
                            path={[{lat:41.40285, lng:2.17403},{lat:41.41285, lng:2.17403}]}
                        /> 
                    )
                }
                {
                    truckLocations && truckLocations.map((location, index) => {
                        if(index === truckLocations.length - 1) {
                            return(<Marker 
                                icon={firstLocationMarker}
                                index={index}
                                position={location}
                            />)
                        } else if(index !== 0) {
                            return(<Marker 
                                icon={pathMarker}
                                index={index}
                                position={location}
                            />)  
                        }
                    })
                }
                {
                    suggestionsList && suggestionsList.map((suggestion, index) => 
                        <Marker
                            icon={suggestion.getIcon()}
                            index={index}
                            position={{lat: suggestion.geometry.location.lat, lng: suggestion.geometry.location.lng}}
                        />
                    )
                }
            </Map>
        </>
    );
}

Gps.defaultProps = {
}

Gps.protoTypes = {
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA'
  })(Gps);