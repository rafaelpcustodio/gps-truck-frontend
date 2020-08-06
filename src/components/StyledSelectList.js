import styled from 'styled-components'
import { colors } from '../helpers/colors'
import { borders } from '../helpers/border'

const StyledSelectList = styled.div`
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

export default StyledSelectList