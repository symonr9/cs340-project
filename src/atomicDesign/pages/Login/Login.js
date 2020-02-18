import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from 'atomicDesign/organisms/LoginForm/LoginForm'
import SignupForm from 'atomicDesign/organisms/SignupForm/SignupForm'
import ActionButton from 'atomicDesign/atoms/ActionButton/ActionButton'
import { sessionIsActive } from 'services/sessionStore'
import { routes } from 'siteData/routes'
import { useBool } from 'services/hooks'
import './Login.scss'

const Login = () => {
  const { val: hasCredentials, toggleVal } = useBool(true)

  if (sessionIsActive()) return <Redirect to={routes.profile} />
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

export default Login
