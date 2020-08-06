import PropTypes from 'prop-types'
import React from 'react'
import StyledMinimumDisance from './StyledMinimumDistance'


const MinimumDistance = props => {

    const { distance } = props

    return (
        <StyledMinimumDisance>
            { `Closest opened Service: ${Math.round(distance)}m` }
        </StyledMinimumDisance>
    )
}

MinimumDistance.defaultProps = {
    distance: 0
}

MinimumDistance.propTypes = {
    distance: PropTypes.number.isRequired,
}

export default MinimumDistance