
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { not } from '../utils/functions'

import SelectContainer from './SelectContainer'
import SelectList from './SelectList'
import StyledSelect from './StyledSelect'

const Select = props => {
    
    const {
        defaultConstant,
        disabled,
        onSelect,
        options
    } = props

    const [ expanded, updateExpanded ] = useState(false)
    const [ optionSelected, updateOptionSelected ] = useState(defaultConstant)

    const handleDropdownClick = () => updateExpanded(not(expanded))

    const handleSelectClick = option => {
        updateExpanded(not(expanded))
        updateOptionSelected(option)
        onSelect(option)
    }
    
    return (
        <StyledSelect disabled={disabled}>
            <SelectContainer
                disabled={disabled}
                expanded={ expanded }
                hasCaret={ true }
                onClick={ handleDropdownClick }
                optionSelected={ optionSelected }/>
            <SelectList
                expanded={ expanded }
                onSelect={ handleSelectClick }
                options={ options }
            />
        </StyledSelect>
    )
}

Select.defaultProps = {
    defaultConstant: '',
    disabled: false,
    onSelect: null,
    options: []
}

Select.propTypes = {
    defaultConstant: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Select
