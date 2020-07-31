import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../helpers/colors'

const SelectText = styled.span`
    color: ${({ disabled }) => disabled ? colors.disabled : colors.text};
    font-size: .75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

SelectText.propTypes = {
    children: PropTypes.string.isRequired
}

export { SelectText }
export default SelectText
