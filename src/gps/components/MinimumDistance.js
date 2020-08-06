import PropTypes from 'prop-types'
import React from 'react'
import StyledMinimumDisance from './StyledMinimumDistance'


const MinimumDistance = props => {

    const { distance } = props
    
    return (
        <StyledMinimumDisance>
            { `Closest opened Service distance: ${distance}m` }
        </StyledMinimumDisance>
    )
}

MinimumDistance.propTypes = {
    distance: PropTypes.string
}

export default MinimumDistance