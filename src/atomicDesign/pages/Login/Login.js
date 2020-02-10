import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
  return <div>Login page. 
    <br/><br/><br/>
    Username:
    <input />
    <br/><br/>
    Password:
    <input />
    <br/><br/>
    <button>Sign In</button>&nbsp;&nbsp;<button>Create Account</button>
  </div>
}

Login.propTypes = {}

export default Login
