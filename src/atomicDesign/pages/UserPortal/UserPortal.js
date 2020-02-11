import React from 'react'
import PropTypes from 'prop-types'
import UserInfo from 'atomicDesign/organisms/UserInfo/UserInfo'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

const UserPortal = props => {
  return (
    <MDBContainer className='p__user-portal'>
      <MDBRow center className='mytest'>
        <MDBCol md='6' className='o__login-form__form'>
          <UserInfo />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

UserPortal.propTypes = {}

export default UserPortal
