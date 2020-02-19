import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from 'atomicDesign/organisms/LoginForm/LoginForm'
import SignupForm from 'atomicDesign/organisms/SignupForm/SignupForm'
import ActionButton from 'atomicDesign/atoms/ActionButton/ActionButton'
import { verifySession } from 'services/redux/actions'
import { routes } from 'siteData/routes'
import { useBool } from 'services/hooks'
import './Login.scss'

const mapStateToProps = state => ({
  sessionData: state.sessionData
})

const mapDispatchToProps = dispatch => ({
  verifySession: () => {
    dispatch(verifySession())
  }
})

const ConnectedLogin = ({ sessionData, verifySession }) => {
  //Login or signup state
  const { val: hasCredentials, toggleVal } = useBool(true)
  useEffect(verifySession, [])

  if (sessionData) return <Redirect to={routes.profile} />
  return (
    <div className='p__login'>
      {hasCredentials && <LoginForm />}
      {!hasCredentials && <SignupForm />}
      <ActionButton
        action={toggleVal}
        content={
          hasCredentials ? 'Click here to signup' : 'Click here to Login'
        }
      />
    </div>
  )
}

ConnectedLogin.propTypes = {
  verifySession: PropTypes.func.isRequired,
  sessionData: PropTypes.object
}

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin)

export default Login
