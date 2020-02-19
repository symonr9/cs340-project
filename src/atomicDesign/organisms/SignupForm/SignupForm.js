import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import { connect } from 'react-redux'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBAlert
} from 'mdbreact'
import { useObject } from 'services/hooks'
import { backendRoutes } from 'siteData/routes'
import { postData, formSubmitServerErrorHandler } from 'services/apiCalls'
import { setSessionToStore } from 'services/redux/actions'

const mapDispatchToProps = dispatch => ({
  setSessionToStore: sessionData => dispatch(setSessionToStore(sessionData))
})

const ConnectedSignupForm = ({ setSessionToStore }) => {
  const { content: fields, updateVal } = useObject({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    errorMessage: null
  })
  const {
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
    errorMessage
  } = fields

  const handleSubmit = () => {
    if (submitValidate(fields)) {
      updateVal('errorMessage', null) // If all is good, clear errors
      const body = {
        email,
        password,
        first_name: firstName,
        last_name: lastName
      }
      postData(
        backendRoutes.signup,
        body,
        sessionData => {
          setSessionToStore(sessionData) // To Redux store && local storage
        },
        error => {
          //Handles error message
          formSubmitServerErrorHandler(error, msg => {
            updateVal('errorMessage', msg)
          })
        }
      )
    }
  }

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md='6'>
          <form>
            <SectionTitle title='Signup' />
            <div className='grey-text'>
              <MDBInput
                label='First name'
                icon='user'
                group
                type='text'
                validate
                error='wrong'
                success='right'
                value={firstName}
                onChange={e => updateVal('firstName', e.target.value)}
              />
              <MDBInput
                label='Last name'
                icon='user'
                group
                type='text'
                validate
                error='wrong'
                success='right'
                value={lastName}
                onChange={e => updateVal('lastName', e.target.value)}
              />
              <MDBInput
                label='Your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
                value={email}
                onChange={e => updateVal('email', e.target.value)}
              />
              <MDBInput
                label='Your password'
                icon='lock'
                group
                type='password'
                validate
                value={password}
                onChange={e => updateVal('password', e.target.value)}
              />
              <MDBInput
                label='Confirm your password'
                icon='lock'
                group
                type='password'
                validate
                value={passwordConfirm}
                onChange={e => updateVal('passwordConfirm', e.target.value)}
              />
            </div>
            {errorMessage && <MDBAlert color='danger'>{errorMessage}</MDBAlert>}
            <div className='text-center'>
              <MDBBtn onClick={handleSubmit}>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

function passwordMatches (password1, password2) {
  return password1 === password2
}

function submitValidate (fields) {
  const { email, password, passwordConfirm, firstName, lastName } = fields
  if (
    email &&
    email.length > 0 &&
    passwordMatches(password, passwordConfirm) &&
    firstName &&
    firstName.length > 0 &&
    lastName &&
    lastName.length > 0
  )
    return true
  else return false
}

ConnectedSignupForm.propTypes = {
  setSessionToStore: PropTypes.func.isRequired
}

const SignupForm = connect(null, mapDispatchToProps)(ConnectedSignupForm)

export default SignupForm
