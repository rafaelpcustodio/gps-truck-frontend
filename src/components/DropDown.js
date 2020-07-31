import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../helpers/colors'

import Icon from './Icon'
import If from './If'

const getDropdownColor = (dark, expanded) => {
    if (dark) {
        return expanded ? colors.text : colors.textAlt
    }
    return expanded ? colors.text : colors.default
}

const StyledDropdown = styled.button`
    background: transparent;
    border: none;
    color: ${({ dark, expanded }) => getDropdownColor(dark, expanded)};
    font-size: .875rem;
    padding: .45rem .5rem 0rem 0rem;
    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

const Dropdown = props => {
    const { dark, disabled, expanded } = props

    const iconColor = disabled ? colors.disabled : colors.text

    return (
        <StyledDropdown
            className={ expanded ? 'is-expanded' : null }
            dark={ dark }
            expanded={ expanded }>
            {  
                <If condition={ expanded } el={ 
                    <Icon color={ iconColor } icon={"caret-down"}/> 
                    }>
                    <Icon color={ iconColor } icon={"caret-up"}/>
                </If>
            }
        </StyledDropdown>
    )
}

Dropdown.defaultProps = {
    dark: false
}

Dropdown.propTypes = {
    dark: PropTypes.bool,
    expanded: PropTypes.bool.isRequired
}

export default Dropdown
