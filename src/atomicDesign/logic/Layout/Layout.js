import React from 'react'
import PropTypes from 'prop-types'
import Header from 'atomicDesign/molecules/Header/Header'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Layout = ({ children }) => {
  return (
    <Container fixed>
      <Typography
        component='div'
        style={{ backgroundColor: '#FFF', minHeight: '100vh' }}
      >
        <Header />
        {children}
      </Typography>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default Layout
