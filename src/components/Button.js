import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'

const StyledText = styled.div`
    color: ${({ selected }) => selected ? 'black' : 'white'};
`

const Button = ( {text, action} ) => {
    return (
        <StyledButton onClick={action}>
            <StyledText>
                {text}
            </StyledText>
        </StyledButton>
    );
}

export default Button;