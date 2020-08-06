import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import LicensePlate from './LicensePlate'
import PoiType from './PoiType'
import Radius from './Radius'
import SearchBarContainer from '../components/SearchBarContainer'
import Button from '../../components/Button'

import { isEmpty } from '../../utils/functions'


const SearchBar = props => {

    const {
        poiTypeList,
        requestPoiTypesAction,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        requestSetLicensePlateSelectedAction,
        requestGetSuggestionsAction,
        requestGetTruckLocationsAction,
        truckLocations
    } = props

    const handleClick = () => {
        if(isEmpty(truckLocations)) {
            requestGetTruckLocationsAction()
            requestPoiTypesAction()
        } else {
            requestGetSuggestionsAction()
        }
    }
    
    useEffect(() => {
        if(truckLocations.length > 0) {
            updateDisableDropDown(false)
        }
    }, [truckLocations])

    const [ disableDropDown, updateDisableDropDown ] = useState(true)
    
    return (
        <SearchBarContainer>
            <LicensePlate 
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
            />
            <PoiType 
                defaultConstant = {'Select POI type'}
                disableDropDown = {disableDropDown}
                options={poiTypeList.map(poiType => poiType.name)}
                onSelect={requestSetPoiTypeSelectedAction}
            />
            <Radius 
                defaultConstant = {'Select radius'}
                disableDropDown= {disableDropDown}
                onSelect={requestSetRadiusSelectedAction}
            />
            <Button text={"Apply"} action={handleClick}/>
        </SearchBarContainer>
    );
}

SearchBar.defaultProps = {
    expanded: false,
    onSelect: null,
    options: [],
    radiusList: [],
    requestSetLicensePlateSelectedAction: null,
    requestSetPoiTypeSelectedAction: null,
    requestSetRadiusSelectedAction: null,
    requestGetSuggestionsAction: null,
    requestGetTruckLocationsAction: null,
}

SearchBar.protoTypes = {
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    poiTypeList: PropTypes.arrayOf(PropTypes.string),
    radiusList: PropTypes.arrayOf(PropTypes.object),
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired,
    requestSetPoiTypeSelectedAction: PropTypes.func.isRequired,
    requestSetRadiusSelectedAction: PropTypes.func.isRequired,
    requestGetSuggestionsAction: PropTypes.func.isRequired,
    requestGetTruckLocationsAction: PropTypes.func.isRequired,
    truckLocations: PropTypes.arrayOf(PropTypes.object)
}

export default SearchBar