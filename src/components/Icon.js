import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ color, className, icon, size }) => (
    <FontAwesomeIcon 
        className={ className } color ={ color } data-cy="icon" icon={ icon } size={ size }
    />)

Icon.defaultProps = {
    className: '',
    color: '',
    icon: '',
    size: 'lg'
}

Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default Icon
