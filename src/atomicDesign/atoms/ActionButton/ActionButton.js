import React from 'react'
import PropTypes from 'prop-types'
import { MDBBtn } from 'mdbreact'

const ActionButton = ({ content, action, color }) => {
  return (
    <MDBBtn color={color} onClick={action}>
      {content}
    </MDBBtn>
  )
}

ActionButton.propTypes = {
  content: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string
}

ActionButton.defaultProps = {
  content: 'Click me',
  action: () => null,
  color: 'primary'
}

export default ActionButton
