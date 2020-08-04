import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMinimumDisance = styled.div`
    background-color: white;
    border: 3px solid #32B3C3;
    font-weight: bold;
    color: #32B3C3;
    font-size: 14px;
    height: 32px;
    padding: .2rem .5rem 0rem .5rem;
    top: 2.2rem;
    left: 46rem;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
    width-min: 3rem;
    width: auto;
    z-index: 1;
`


const MinimumDistance = (props) => {
    const { distance } = props
    
    return (
        <StyledMinimumDisance>
            { `Closest opened Service distance: ${distance}m` }
        </StyledMinimumDisance>
    )
}

MinimumDistance.defaultProps = {
}

MinimumDistance.propTypes = {
}

export default MinimumDistance