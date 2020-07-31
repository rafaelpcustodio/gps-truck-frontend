import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    color: ${({ selected }) => selected ? 'black' : 'white'};
`

const StyledButton = styled.button`
    font-size: 14px;
    height: 32px;
    width: 70px;
    margin: 8px 12px 8px 8px;
    background-color: #32B3C3;
    border: none;
    :focus {
        outline: none;
    }
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