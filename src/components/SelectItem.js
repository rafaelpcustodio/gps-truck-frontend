import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '../helpers/border'
import { colors } from '../helpers/colors'

const StyledSelectItem = styled.li`
    border-radius: ${borders.default};
    color: ${colors.text};
    font-size: .75rem;
    list-style: none;
    padding: .25rem .5rem;
    white-space: nowrap;
    &:hover {
        background: ${colors.fourth};
        cursor: pointer;
    }
`

const SelectItem = ({ dataCy, onClick, option }) => (

    <StyledSelectItem onClick={ () => onClick(option) }>
        { option ? `${option}` : 'failure' }
    </StyledSelectItem>

)

SelectItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired
}

export default SelectItem
