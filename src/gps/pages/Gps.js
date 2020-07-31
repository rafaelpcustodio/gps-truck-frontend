import React, { useEffect, useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Dropdown from '../../components/SelectContainer'
import { isNotEmpty, not } from '../../utils/functions'
import SearchBar from '../components/SearchBar'
import truckMarker from '../../_assets/img/icn-current-location.png'
import pathMarker from '../../_assets/img/icn-path.png'
import firstLocationMarker from '../../_assets/img/icn-first-location.png'

const mapStyles = {
    width: '100%',
    height: '100%',
  };

const Gps = props => {

    const {
        licensePlateSelected,
        truckLocations,
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        radiusList,
        requestGetTruckLocationsAction,
        requestSetLicensePlateSelectedAction,
        requestSetLocationAction,
        requestPoiTypesAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        requestGetSuggestionsAction,
        requestRadiusAction
    } = props

    useEffect(() => {
        requestPoiTypesAction()
        requestRadiusAction()
    }, [])

    return (
        <>
            <SearchBar
                licensePlateSelected={licensePlateSelected}
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
                requestPoiTypesAction={requestPoiTypesAction}
                requestRadiusAction={requestRadiusAction}
                requestGetTruckLocationsAction={requestGetTruckLocationsAction}
                requestSetLocationAction={requestSetLocationAction}
                requestSetRadiusSelectedAction={requestSetRadiusSelectedAction}
                requestSetPoiTypeSelectedAction={requestSetPoiTypeSelectedAction}
                requestGetSuggestionsAction={requestGetSuggestionsAction}
                requestGetTruckLocationsActions={requestGetTruckLocationsAction}
                poiTypeList={poiTypeList}
                poiTypeSelected={poiTypeSelected}
                radiusSelected={radiusSelected}
                radiusList={radiusList}
                truckLocations={truckLocations}
            />
            <Map
                google={props.google}
                disableDefaultUI={true}
                zoom={8}
                style={mapStyles}
                initialCenter={undefined}
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