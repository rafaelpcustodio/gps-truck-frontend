import styled from 'styled-components'
import { colors } from '../helpers/colors'

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

export default StyledSelect