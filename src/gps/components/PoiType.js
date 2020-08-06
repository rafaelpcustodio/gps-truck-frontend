import PropTypes from 'prop-types'
import React from 'react'
import SelectPoiType from '../../components/SelectPoiType'


const PoiType = props => {

    const { 
        disableDropDown, 
        defaultConstant, 
        options, 
        onSelect,
        selected
    } = props
    
    return (
        <SelectPoiType
            defaultConstant = { defaultConstant }
            disabled= {disableDropDown}
            onSelect={ POITypeSelected => onSelect(POITypeSelected) }
            options={ options }
            selected={selected}
        />
    )
}

PoiType.defaultProps = {
    defaultConstant: '',
    onSelect: null,
    options: []
}

PoiType.propTypes = {
    defaultConstant: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedPOI: PropTypes.string
}

export default PoiType