import styled from 'styled-components'
import { colors } from '../../helpers/colors'

const StyledMinimumDisance = styled.div`
    background-color: white;
    border: 3px solid ${colors.lightGreen};
    border-radius: 5px;
    font-weight: bold;
    color: ${colors.lightGreen};
    font-size: 14px;
    height: 32px;
    padding: .2rem .5rem 0rem .5rem;
    top: 6rem;
    left: 1.6rem;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
    width-min: 3rem;
    width: auto;
    z-index: 1;
`

export default StyledMinimumDisance