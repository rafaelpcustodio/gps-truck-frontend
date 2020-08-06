import PropTypes from 'prop-types'
import React from 'react'
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react'
import truckMarker from '../../_assets/img/icn-current-location.png'
import pathMarker from '../../_assets/img/icn-path.png'
import firstLocationMarker from '../../_assets/img/icn-first-location.png'

import { isNotEmpty } from '../../utils/functions'

const GoogleMap = props => {

    const {
        minimumDistance,
        truckLocations,
        suggestionsList
    } = props

    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    const arrow = {
        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    }
    
    return (
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
                    isNotEmpty(minimumDistance) && isNotEmpty(truckLocations[0]) && (
                        <Polyline 
                            geodesic={true}
                            strokeColor={'#32B3C3'}
                            strokeOpacity={1.0}
                            icons={[{icon: arrow, offset: '100%'}]}
                            strokeWeight={2}
                            path={[truckLocations[0].toGoogleMaps, minimumDistance.toGoogleMaps]}
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
                            position={suggestion.toGoogleMaps}
                        />
                    )
                }
            </Map>
    );
}

GoogleMap.protoTypes = {
    minimumDistance: PropTypes.string,
    suggestionsList: PropTypes.arrayOf(PropTypes.object),
    truckLocations: PropTypes.arrayOf(PropTypes.object)
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDoEypy18XsLdHPyRO7t4BwmOGLDdTaDoA'
  })(GoogleMap);