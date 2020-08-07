import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { isNotEmpty } from '../utils/functions'

import { colors } from '../helpers/colors'

import Dropdown from './DropDown'
import StyledSelectContainer from './StyledSelectedContainer'

const SelectText = styled.span`
    color: ${colors.subText};
    color: ${({ disabled }) => disabled ? colors.disabled : colors.text};
    font-size: .75rem;
    margin: .3rem 0rem 0rem .8rem;
    width: 100%;
`

const SelectRadiusContainer = ( { disabled, expanded, onClick, hasCaret, optionSelected } ) => {

    return (
        <StyledSelectContainer>
            <SelectText disabled={disabled} onClick={ onClick }>{ optionSelected.length > 0 ?
                    `${optionSelected}` : '' }
            </SelectText>
            <Dropdown
                dark
                disabled={disabled}
                expanded={ expanded }
                hasCaret = {hasCaret}
                hasSelectedOption={ isNotEmpty(optionSelected) }
                onClick={ onClick }
            />
        </StyledSelectContainer>
    )
}

SelectRadiusContainer.defaultProps = {
    disabled: false,
    expanded: false,
    hasCaret: true,
    onClick: null,
    optionSelected: ''
}

SelectRadiusContainer.propTypes = {
    disabled: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    hasCaret: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    optionSelected: PropTypes.string.isRequired
}

export default SelectRadiusContainer