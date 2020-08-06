import PropTypes from 'prop-types'
import React from 'react'
import Select from '../../components/Select'


const PoiType = props => {

    const { 
        disableDropDown, 
        defaultConstant, 
        options, 
        onSelect 
    } = props
    
    return (
        <Select
            defaultConstant = { defaultConstant }
            disabled= {disableDropDown}
            onSelect={ POITypeSelected => onSelect(POITypeSelected) }
            options={ options }
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