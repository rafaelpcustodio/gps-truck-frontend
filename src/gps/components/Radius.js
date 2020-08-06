import React from 'react'
import PropTypes from 'prop-types'
import SelectRadius from '../../components/SelectRadius'

const Radius = props => {

    const { 
        disableDropDown, 
        defaultConstant,
        onSelect,
        options,
        selected
    } = props
    
    return (
        <SelectRadius
            disabled={disableDropDown}
            defaultConstant = { defaultConstant }
            onSelect={ RadiusSelected => onSelect(RadiusSelected) }
            options={ options }
            selected={selected}
        />
    )
}

Radius.defaultProps = {
    defaultConstant: PropTypes.string.isRequired,
    onSelect: null
}

Radius.propTypes = {
    defaultConstant: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedRadius: PropTypes.string
}

export default Radius
