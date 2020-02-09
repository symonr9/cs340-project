import React from 'react'
import PropTypes from 'prop-types'
import { routes } from 'siteData/routes'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div>
      <header className='App-header'>
        <Link to={routes.login}>Login</Link>
        <Link to={routes.newList}>NewList</Link>
        <Link to={routes.edit}>Edit</Link>
      </header>
      {children}
    </div>
  )
}

Layout.propTypes = {}

export default Layout
