import PropTypes from 'prop-types'
import React from 'react'
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react'
import truckMarker from '../../_assets/img/icn-current-location.png'
import pathMarker from '../../_assets/img/icn-path.png'
import firstLocationMarker from '../../_assets/img/icn-first-location.png'

import Location from '../../models/Location'
import Candidate from '../../models/suggestions/Candidate'

import { isNotEmpty } from '../../utils/functions'

import { colors } from '../../helpers/colors'

const GoogleMap = props => {

    const {
        minimumDistance,
        locationsList,
        suggestionsList
    } = props

    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    
    const DEFAULT_CENTER = {
        lat: 41.40298,
        lng: 2.17398
    }

    const arrow = {
        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    }
    
    return (
        <Map
            google={props.google}
            disableDefaultUI={true}
            zoom={16}
            style={mapStyles}
            initialCenter={DEFAULT_CENTER}
            >
                {
                    locationsList[0] &&
                    ( 
                        <Marker 
                            icon={truckMarker}
                            position={locationsList[0]}
                        />
                    ) 
                }
                {
                    isNotEmpty(minimumDistance) && isNotEmpty(locationsList[0]) && (
                        <Polyline 
                            geodesic={true}
                            strokeColor={colors.lightGreen}
                            strokeOpacity={1.0}
                            icons={[{icon: arrow, offset: '100%'}]}
                            strokeWeight={2}
                            path={[locationsList[0].toGoogleMaps, minimumDistance.toGoogleMaps]}
                        /> 
                    )
                }
                {
                    locationsList && locationsList.map((location, index) => {
                        if(index === locationsList.length - 1) {
                            return(<Marker 
                                icon={firstLocationMarker}
                                key={index}
                                position={location}
                            />)
                        } else if(index !== 0) {
                            return(<Marker 
                                icon={pathMarker}
                                key={index}
                                position={location}
                            />)  
                        }
                    })
                }
                {
                    suggestionsList && suggestionsList.map((suggestion, index) => 
                        <Marker
                            icon={suggestion.getIcon()}
                            key={index}
                            position={suggestion.toGoogleMaps}
                        />
                    )
                }
            </Map>
    );
}

GoogleMap.defaultProps = {
    minimumDistance: '',
    suggestionsList: [],
    locationsList: []
}

GoogleMap.protoTypes = {
    minimumDistance: PropTypes.string,
    suggestionsList: PropTypes.arrayOf(PropTypes.objectOf(Candidate)),
    locationsList: PropTypes.arrayOf(PropTypes.objectOf(Location))
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(GoogleMap);