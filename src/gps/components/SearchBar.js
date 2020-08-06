import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import LicensePlate from './LicensePlate'
import PoiType from './PoiType'
import Radius from './Radius'
import SearchBarContainer from '../components/SearchBarContainer'
import Button from '../../components/Button'
import { radiusDefaultList } from '../constants'

import { isEmpty } from '../../utils/functions'

import { defaultPoiTypeMessage, defaultRadiusMessage } from '../constants'


const SearchBar = props => {

    const {
        poiTypeList,
        poiTypeSelected,
        radiusSelected,
        requestPoiTypesAction,
        requestSetRadiusSelectedAction,
        requestResetLocationsAction,
        requestResetMinimumDistanceAction,
        requestResetSuggestionsAction,
        requestSetPoiTypeSelectedAction,
        requestSetLicensePlateSelectedAction,
        requestGetSuggestionsAction,
        requestGetLocationsAction,
        locationsList
    } = props

    const handleClick = () => {
        if(isEmpty(locationsList)) {
            requestGetLocationsAction()
            requestPoiTypesAction()
        } else {
            requestGetSuggestionsAction()
        }
    }
    
    useEffect(() => {
        if(locationsList.length > 0) {
            updateDisableDropDown(false)
        }
    }, [locationsList])

    const handleText = changedLicensePlate => {
        requestSetRadiusSelectedAction(defaultRadiusMessage)
        requestSetPoiTypeSelectedAction(defaultPoiTypeMessage)
        requestResetMinimumDistanceAction()
        requestResetLocationsAction()
        requestResetSuggestionsAction()
        updateDisableDropDown(true)
    }

    const [ disableDropDown, updateDisableDropDown ] = useState(true)

    const [ radiusList ] = useState(radiusDefaultList)
    
    return (
        <SearchBarContainer>
            <LicensePlate 
                handleText={handleText}
                requestSetLicensePlateSelectedAction={requestSetLicensePlateSelectedAction}
            />
            <PoiType 
                defaultConstant = {defaultPoiTypeMessage}
                selected={poiTypeSelected}
                disableDropDown = {disableDropDown}
                options={poiTypeList}
                onSelect={requestSetPoiTypeSelectedAction}
            />
            <Radius 
                defaultConstant = {defaultRadiusMessage}
                selected={radiusSelected}
                disableDropDown= {disableDropDown}
                options={radiusList}
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
    poiTypeList: [],
    radiusList: [],
    requestSetLicensePlateSelectedAction: null,
    requestSetPoiTypeSelectedAction: null,
    requestSetRadiusSelectedAction: null,
    requestGetSuggestionsAction: null,
    requestGetLocationsAction: null,
}

SearchBar.protoTypes = {
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    poiTypeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    radiusList: PropTypes.arrayOf(PropTypes.object),
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired,
    requestSetPoiTypeSelectedAction: PropTypes.func.isRequired,
    requestSetRadiusSelectedAction: PropTypes.func.isRequired,
    requestGetSuggestionsAction: PropTypes.func.isRequired,
    requestGetLocationsAction: PropTypes.func.isRequired,
    locationsList: PropTypes.arrayOf(PropTypes.object)
}

export default SearchBar