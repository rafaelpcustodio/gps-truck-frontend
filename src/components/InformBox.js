import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import React from 'react'

const Select = props => {
    
    const {
        requestSetNoLocationsAction,
        noLocations
    } = props

    
    return (
        <>
            <Modal  isOpen={noLocations} 
                    toggle={requestSetNoLocationsAction}
                    opacity={1}
                    >
                    <ModalHeader toggle={requestSetNoLocationsAction}>License Plate Issue</ModalHeader>
                    <ModalBody>
                       This License Plate is invalid or there are no locations available in the last 2 hours.
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            color="secondary" 
                            onClick={requestSetNoLocationsAction}>
                                Ok
                        </Button>
                    </ModalFooter>
            </Modal>
        </>
    )
}

Select.defaultProps = {
    requestSetNoLocationsAction: null,
    noLocations: false
}

Select.propTypes = {
    requestSetNoLocationsAction: PropTypes.func.isRequired,
    noLocations: PropTypes.bool.isRequired
}

export default Select
