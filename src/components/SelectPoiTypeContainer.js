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

const SelectPoiTypeContainer = ( { disabled, expanded, onClick, hasCaret, optionSelected } ) => {
    console.log(optionSelected)
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

export default SelectPoiTypeContainer