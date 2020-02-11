import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from 'atomicDesign/organisms/LoginForm/LoginForm'
import SignupForm from 'atomicDesign/organisms/SignupForm/SignupForm'
import ActionButton from 'atomicDesign/atoms/ActionButton/ActionButton'
import { useBool } from 'services/hooks'
import './Login.scss'

const Login = props => {
  const { val: hasCredentials, toggleVal } = useBool(true)
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

Login.propTypes = {}

export default Login
