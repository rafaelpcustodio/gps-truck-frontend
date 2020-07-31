import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '../helpers/border'
import { colors } from '../helpers/colors'

import SelectItem from './SelectItem'

const StyledSelectList = styled.ul`
    background: ${colors.default};
    border-bottom-left-radius: ${borders.default};
    border-bottom-right-radius: ${borders.default};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    left: 0;
    min-width: 100%;
    opacity: ${({ expanded }) => expanded ? 1 : 0};
    padding: .5rem;
    position: absolute;
    transform: translateY(${({ expanded }) => expanded ? 0 : '-150px'});
    transition: all .2s linear;
`

const SelectList = ({ expanded, onSelect, options }) => (

    <StyledSelectList expanded={ expanded }>
        { options.map((option, index) =>
            <SelectItem key={ index } onClick={ onSelect } option={ option }/>)
        }
    </StyledSelectList>

)

SelectList.defaultProps = {
    expanded: false,
    onSelect: null,
    options: []
}

SelectList.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SelectList
