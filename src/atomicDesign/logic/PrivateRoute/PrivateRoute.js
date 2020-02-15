import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { routes } from 'siteData/routes'

// const mapStateToProps = state => ({
//   sessionData: state.sessionData,
//   globalFunctions: state.globalFunctions,
//   contacts: state.contacts
// })

// ConnectedPrivateRoute

//Pending redux store

const PrivateRoute = ({
  component: Component,
  // sessionData,
  // globalFunctions,
  ...rest
}) => {
  //Mock session
  const sessionData = {
    session: true
  }

  const routeProps = {
    ...rest,
    render: props =>
      sessionData.session ? (
        <Component
          sessionData={sessionData}
          // globalFunctions={globalFunctions}
          {...props}
        />
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

// ConnectedPrivateRoute.propTypes = {
//   component: PropTypes.func,
//   sessionData: PropTypes.objectOf(PropTypes.any).isRequired,
//   contacts: PropTypes.objectOf(PropTypes.string),
//   exact: PropTypes.bool
// }
// ConnectedPrivateRoute.defaultProps = {
//   exact: false
// }
// const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute)

export default PrivateRoute
