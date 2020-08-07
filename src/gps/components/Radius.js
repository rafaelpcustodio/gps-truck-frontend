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
    disableDropDown: true,
    defaultConstant: '',
    onSelect: null,
    options: []
}

Radius.propTypes = {
    disableDropDown: PropTypes.bool.isRequired,
    defaultConstant: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string
}

export default Radius
