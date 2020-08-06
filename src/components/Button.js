import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'

const StyledText = styled.div`
    color: ${({ selected }) => selected ? 'black' : 'white'};
`

const Button = ( {action, text} ) => {
    return (
        <StyledButton onClick={action}>
            <StyledText>
                {text}
            </StyledText>
        </StyledButton>
    );
}

Button.defaultProps = {
    action: null,
    text: ''
}

Button.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;