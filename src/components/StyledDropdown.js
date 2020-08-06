import styled from 'styled-components'
import { colors } from '../helpers/colors'

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

export default StyledDropdown