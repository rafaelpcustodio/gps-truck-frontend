
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { not } from '../utils/functions'

import { colors } from '../helpers/colors'

import SelectContainer from './SelectContainer'
import SelectList from './SelectList'

const StyledSelect = styled.div`
    background: ${colors.default};
    border: 1px solid ${colors.lightGray};
    color: ${({ disabled }) => disabled ? colors.disabled : colors.text};
    position: relative;
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'initial'};
    height: 32px;
    margin: 8px 8px 5px 8px;
    width: 9.5rem;
`

const Select = props => {
    const {
        defaultConstant,
        disabled,
        onReasonClear,
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
                onClick={ handleDropdownClick }
                hasCaret={ true }
                onReasonClear={ onReasonClear }
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
    defaultConstant: null,
    disabled: false,
    onSelect: null,
    options: []
}

Select.propTypes = {
    defaultConstant: PropTypes.string,
    onReasonClear: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export { StyledSelect }
export default Select
