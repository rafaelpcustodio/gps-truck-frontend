import React from 'react'
import styled from 'styled-components'

import { isNotEmpty, not } from '../utils/functions'

import { colors } from '../helpers/colors'

import If from './If'

import Dropdown from './DropDown'

const StyledSelectContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    &:hover {
        cursor: pointer;
    }
`

const SelectText = styled.span`
    color: ${colors.subText};
    color: ${({ disabled }) => disabled ? colors.disabled : colors.text};
    font-size: .75rem;
    margin: .3rem 0rem 0rem .8rem;
    width: 100%;
`


const SelectContainer = ( { disabled, expanded, onClick, hasCaret, optionSelected } ) => {

    return (
        <StyledSelectContainer>
           <If condition={ not(hasCaret) && not(optionSelected) } el={
                <SelectText disabled={disabled} onClick={ onClick }>{ optionSelected.length > 0 ?
                        `${optionSelected}` : '' }
                </SelectText> }>
            </If>
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

export default SelectContainer