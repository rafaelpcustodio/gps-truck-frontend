import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../helpers/colors'

import { licensePlateDefaultMessage } from '../constants'

const StyledLicensePlateText = styled.input`
    background: ${colors.default};
    border: ${({ invalidLicensePlate }) => 
    invalidLicensePlate ? '1px solid red;' : `1px solid ${colors.lightGray}`};
    margin: 8px 8px 5px 8px;
    height: 32px;
    padding: .7rem 1rem;
    position: relative;
    width: 15rem;
`

const LicensePlate = props => {

    const {
        handleText,
        requestSetLicensePlateSelectedAction
    } = props

    const [ text, updateText ] = useState('')

    const [ invalidLicensePlate, updateInvalidLicensePlate] = useState(false)

    const handleChange = event => {
        updateText(event.target.value)
        handleText(true)
    }
    
    useEffect(() => {
        const regex = '[A-Z-a-z]{3}[0-9]{4}'
        if(!text.match(regex) && text.length > 0) {
            updateInvalidLicensePlate(true)
        } else if(text.match(regex) || text.length === 0) {
            updateInvalidLicensePlate(false)
        }
        requestSetLicensePlateSelectedAction(text)
    }, [text, requestSetLicensePlateSelectedAction])

    return (
        <StyledLicensePlateText
            invalidLicensePlate={invalidLicensePlate}
            maxLength={"7"}
            onChange={handleChange}
            placeholder={licensePlateDefaultMessage}
            value={text}
        />
    )
}

LicensePlate.defaultProps = {
    handleText: null,
    requestSetLicensePlateSelectedAction: null
}

LicensePlate.propTypes = {
    handleText: PropTypes.func.isRequired,
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired
}

export default LicensePlate