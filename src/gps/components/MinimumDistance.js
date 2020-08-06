import PropTypes from 'prop-types'
import React from 'react'
import StyledMinimumDisance from './StyledMinimumDistance'


const MinimumDistance = props => {

    const { distance } = props
    console.log(Math.round(distance))
    return (
        <StyledMinimumDisance>
            { `Closest opened Service: ${Math.round(distance)}m` }
        </StyledMinimumDisance>
    )
}

MinimumDistance.propTypes = {
    distance: PropTypes.string
}

export default MinimumDistance