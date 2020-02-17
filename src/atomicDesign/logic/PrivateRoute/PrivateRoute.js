import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { routes } from 'siteData/routes'
import { getSession, sessionIsActive } from 'services/sessionStore'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const routeProps = {
    ...rest,
    render: props =>
      sessionIsActive() ? (
        <Component sessionData={getSession()} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login,
            state: { from: props.location }
          }}
        />
      )
  }
  return <Route {...routeProps} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func
}

export default PrivateRoute
