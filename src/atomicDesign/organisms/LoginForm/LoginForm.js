import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSessionToStore } from 'services/redux/actions'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import './LoginForm.scss'
import { routes, backendRoutes } from 'siteData/routes'
import { useObject } from 'services/hooks'
import { postData } from 'services/apiCalls'

const mapDispatchToProps = dispatch => ({
  setSessionToStore: sessionData => dispatch(setSessionToStore(sessionData))
})

const ConnectedLoginForm = ({ setSessionToStore }) => {
  const { content: state, updateVal } = useObject({
    email: 'steve7@gmail.com',
    password: 'secret again',
    toRedirect: false
  })

  const handleSubmit = () => {
    const { email, password } = state
    if (email && email.length > 0 && password && password.length > 0) {
      const body = { email, password }
      postData(
        backendRoutes.login,
        body,
        sessionData => {
          setSessionToStore(sessionData) // To Redux store && local storage
          updateVal('toRedirect', true)
        },
        err => {
          console.error(err)
        }
      )
    }
  }

  if (state.toRedirect) return <Redirect to={routes.profile} />
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
                value={state.email}
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
                value={state.password}
                onChange={event => {
                  updateVal('password', event.target.value)
                }}
              />
            </div>
            <div className='text-center'>
              <MDBBtn onClick={handleSubmit}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
const LoginForm = connect(null, mapDispatchToProps)(ConnectedLoginForm)

export default LoginForm
