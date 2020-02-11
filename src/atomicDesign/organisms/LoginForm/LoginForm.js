import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import './LoginForm.scss'

const LoginForm = props => {
  return (
    <MDBContainer className='o__login-form'>
      <MDBRow>
        <MDBCol />
        <MDBCol md='8' className='o__login-form__form'>
          <form>
            <SectionTitle title={'Signup'} />
            <div className='grey-text'>
              <MDBInput
                label='Type your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='Type your password'
                icon='lock'
                group
                type='password'
                validate
              />
            </div>
            <div className='text-center'>
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol />
      </MDBRow>
    </MDBContainer>
  )
}

LoginForm.propTypes = {}

export default LoginForm
