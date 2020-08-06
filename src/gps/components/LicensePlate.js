import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../helpers/colors'

const StyledLicensePlateText = styled.input`
    background: ${colors.default};
    border: 1px solid ${colors.lightGray};
    margin: 8px 8px 5px 8px;
    height: 32px;
    padding: .7rem 1rem;
    position: relative;
    width: 15rem;
`

const LicensePlate = props => {

    const {
        requestSetLicensePlateSelectedAction
    } = props

    const [ text, updateText ] = useState('')

    const handleChange = event => {
        updateText(event.target.value)
    }

    useEffect(() => {
        requestSetLicensePlateSelectedAction(text)
    }, [text])

    return (
        <StyledLicensePlateText
            onChange={handleChange}
            placeholder={'License plate (ex: ABC1234)'}
            maxLength={"7"}
            value={text}
        />
    )
}

LicensePlate.defaultProps = {
    requestSetLicensePlateSelectedAction: null
}

LicensePlate.propTypes = {
    requestSetLicensePlateSelectedAction: PropTypes.func.isRequired
}

export default LicensePlate