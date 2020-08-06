import styled from 'styled-components'
import { colors } from '../helpers/colors'

const StyledButton = styled.button`
    font-size: 14px;
    height: 32px;
    width: 70px;
    margin: 8px 12px 8px 8px;
    background-color: ${colors.lightGreen};
    border: none;
    :focus {
        outline: none;
    }
`

export default StyledButton