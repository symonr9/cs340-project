import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

const SignupForm = props => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md='6'>
          <form>
            <SectionTitle title='Signup' />
            <div className='grey-text'>
              <MDBInput
                label='Your name'
                icon='user'
                group
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='Your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='Confirm your email'
                icon='exclamation-triangle'
                group
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='Your password'
                icon='lock'
                group
                type='password'
                validate
              />
            </div>
            <div className='text-center'>
              <MDBBtn>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

SignupForm.propTypes = {}

export default SignupForm
