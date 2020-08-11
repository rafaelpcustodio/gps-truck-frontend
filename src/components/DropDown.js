import PropTypes from 'prop-types'
import React from 'react'

import { colors } from '../helpers/colors'

import Icon from './Icon'
import If from './If'
import StyledDropdown from './StyledDropdown'

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = props => {

    const { 
        dark, 
        disabled, 
        expanded 
    } = props

    const iconColor = disabled ? colors.disabled : colors.text
    
    return (
        <StyledDropdown
            className={ expanded ? 'is-expanded' : null }
            dark={ dark }
            expanded={ expanded }>
            {  
                <If condition={ expanded } el={ 
                    <Icon color={ iconColor } icon={faCaretDown} size={"lg"} /> 
                    }>
                    <Icon color={ iconColor } icon={faCaretUp} size={"lg"} />
                </If>
            }
        </StyledDropdown>
    )
}

Dropdown.defaultProps = {
    disabled: false,
    expanded: false
}

Dropdown.propTypes = {
    dark: PropTypes.bool,
    disabled: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired
}

export default Dropdown
