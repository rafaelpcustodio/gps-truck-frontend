import styled from 'styled-components'
import { colors } from '../../helpers/colors'

const SearchBarContainer =  styled.div`
    background: ${colors.subHeaderBackground};
    box-shadow: 2px 2px 2px ${colors.lightGray};
    display: flex;
    z-index: 1;
    height: 3.2rem;
    position: absolute;
    top: 25px;
    left: 25px;
}`

export default SearchBarContainer