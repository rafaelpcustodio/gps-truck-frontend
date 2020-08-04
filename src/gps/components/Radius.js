import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../components/Select'

const Radius = props => {

    const { disableDropDown, defaultConstant,  options, onSelect } = props
    
    return (
        <Select
            disabled={disableDropDown}
            defaultConstant = { defaultConstant }
            onSelect={ RadiusSelected => onSelect(RadiusSelected) }
            options={ options }
        />
    )
}

Radius.defaultProps = {
    defaultConstant: PropTypes.string.isRequired,
    onSelect: null,
    options: []
}

Radius.propTypes = {
    defaultConstant: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedRadius: PropTypes.string
}

export default Radius
