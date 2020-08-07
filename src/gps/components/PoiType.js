import PropTypes from 'prop-types'
import React from 'react'
import SelectPoiType from '../../components/SelectPoiType'


const PoiType = props => {

    const { 
        defaultConstant,
        disableDropDown, 
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
    disableDropDown: true,
    onSelect: null,
    options: []
}

PoiType.propTypes = {
    defaultConstant: PropTypes.string.isRequired,
    disableDropDown: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string
}

export default PoiType