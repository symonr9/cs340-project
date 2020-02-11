import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from 'atomicDesign/organisms/LoginForm/LoginForm'
import './Login.scss'

const Login = props => {
  return (
    <div className='p__login'>
      <LoginForm />
    </div>
  )
}

Login.propTypes = {}

export default Login
