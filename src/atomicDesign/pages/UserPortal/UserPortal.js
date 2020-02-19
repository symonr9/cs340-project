import React from 'react'
import UserInfo from 'atomicDesign/organisms/UserInfo/UserInfo'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

const UserPortal = () => {
  return (
    <MDBContainer className='p__user-portal'>
      <MDBRow center className='mytest'>
        <MDBCol md='6' className='o__login-form__form'>
          <UserInfo />
          user page
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default UserPortal
