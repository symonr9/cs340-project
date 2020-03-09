import React from 'react'
// import PropTypes from 'prop-types'
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdbreact'
import './ListItem.scss'

const ListItem = props => {
	return <div>{props.movie}</div>
}

ListItem.propTypes = {}

export default ListItem
