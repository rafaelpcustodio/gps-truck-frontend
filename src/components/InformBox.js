import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { not } from '../utils/functions'

import SelectContainer from './SelectPoiTypeContainer'
import SelectList from './SelectList'
import StyledSelect from './StyledSelect'

const Select = props => {
    
    const {
        requestSetNoLocationsAction
    } = props

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div>
            <Button color="danger" onClick={toggle}></Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
        </Modal>
      </div>
    )
}

Select.defaultProps = {
}

Select.propTypes = {
}

export default Select
