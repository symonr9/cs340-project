import React from 'react'
import { connect } from 'react-redux'
import { setSessionToStore } from 'services/redux/actions'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBAlert
} from 'mdbreact'
import './LoginForm.scss'
import { backendRoutes } from 'siteData/routes'
import { useObject } from 'services/hooks'
import { postData, formSubmitServerErrorHandler } from 'services/apiCalls'

const mapDispatchToProps = dispatch => ({
  setSessionToStore: sessionData => dispatch(setSessionToStore(sessionData))
})

const ConnectedLoginForm = ({ setSessionToStore }) => {
  const { content: state, updateVal } = useObject({
    email: '',
    password: '',
    errorMessage: null
  })
  const { email, password, errorMessage } = state

  const handleSubmit = () => {
    if (loginValidation(email, password)) {
      updateVal('errorMessage', null) // If all is good, clear errors
      const body = { email, password }
      postData(backendRoutes.login, body, setSessionToStore, error => {
        //Handles error message
        formSubmitServerErrorHandler(error, msg => {
          updateVal('errorMessage', msg)
        })
      })
    }
  }

  return (
    <MDBContainer className='o__login-form'>
      <MDBRow center>
        <MDBCol md='6' className='o__login-form__form'>
          <form>
            <SectionTitle title='Login' />
            <div className='grey-text'>
              <MDBInput
                label='Type your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
                value={email}
                onChange={event => {
                  updateVal('email', event.target.value)
                }}
              />
              <MDBInput
                label='Type your password'
                icon='lock'
                group
                type='password'
                validate
                value={password}
                onChange={event => {
                  updateVal('password', event.target.value)
                }}
              />
            </div>
            {errorMessage && <MDBAlert color='danger'>{errorMessage}</MDBAlert>}
            <div className='text-center'>
              <MDBBtn onClick={handleSubmit}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

function loginValidation (email, password) {
  return email && email.length > 0 && password && password.length > 0
}

const LoginForm = connect(null, mapDispatchToProps)(ConnectedLoginForm)

export default LoginForm
