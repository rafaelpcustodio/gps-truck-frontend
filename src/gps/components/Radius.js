import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from '../../components/Select'

const Radius = props => {

    const { 
        disableDropDown, 
        defaultConstant,
        onSelect 
    } = props

    const [ radiusList ] = useState(['1000', '2000', '4000', '4500', '5000'])
    
    return (
        <Select
            disabled={disableDropDown}
            defaultConstant = { defaultConstant }
            onSelect={ RadiusSelected => onSelect(RadiusSelected) }
            options={ radiusList }
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
