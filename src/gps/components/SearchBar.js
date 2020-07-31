import React, { useEffect, useState } from 'react'
import LicensePlate from './LicensePlate'
import PoiType from './PoiType'
import Radius from './Radius'
import SearchBarContainer from '../components/SearchBarContainer'
import Button from '../../components/Button'

import {isEmpty} from '../../utils/functions'


const SearchBar = props => {

    const {
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        radiusList,
        requestSetRadiusSelectedAction,
        requestSetPoiTypeSelectedAction,
        requestSetLicensePlateSelectedAction,
        requestGetSuggestionsAction,
        requestPoiTypesAction,
        requestRadiusAction,
        requestGetTruckLocationsAction,
        truckLocations
    } = props

    const handleClick = () => {
        if(isEmpty(truckLocations)) {
            requestGetTruckLocationsAction()
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
            <LicensePlate requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}/>
            <PoiType 
                defaultConstant = {'Select POI type'}
                disableDropDown = {disableDropDown}
                options={poiTypeList}
                onSelect={requestSetPoiTypeSelectedAction}
                selectedPOI={poiTypeSelected}
                requestPoiTypesAction={requestPoiTypesAction}
            />
            <Radius 
                defaultConstant = {'Select radius'}
                disableDropDown= {disableDropDown}
                options={radiusList}
                onSelect={requestSetRadiusSelectedAction}
                selectedRadius={radiusSelected}
                requestRadiusAction={requestRadiusAction}
            />
            <Button text={"Apply"} action={handleClick}/>
        </SearchBarContainer>
    );
}

SearchBar.defaultProps = {
}

SearchBar.protoTypes = {
}

export default SearchBar