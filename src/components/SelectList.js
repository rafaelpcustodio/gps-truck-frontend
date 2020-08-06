import PropTypes from 'prop-types'
import React from 'react'

import SelectItem from './SelectItem'
import StyledSelectList from './StyledSelectList'
import If from '../components/If'
import { isNotEmpty } from '../utils/functions'

const SelectList = ({ expanded, onSelect, options }) => {
    
    return(
        <StyledSelectList expanded={ expanded }>
            { options && options.map((option, index) =>
                <SelectItem 
                    key={ index } 
                    onClick={ onSelect } 
                    option={ option }
                />)
            }
        </StyledSelectList>
    )
}

SelectList.defaultProps = {
    expanded: false,
    onSelect: null,
    options: []
}

SelectList.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SelectList
