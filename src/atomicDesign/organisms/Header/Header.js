import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import logoImg from 'assets/logo.png'
import { routes } from 'siteData/routes'
import NavLink from 'atomicDesign/atoms/NavLink/NavLink'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { verifySession, removeSession } from 'services/redux/actions'
import './Header.scss'

const mapStateToProps = state => ({
  sessionData: state.sessionData
})

const mapDispatchToProps = dispatch => ({
  verifySession: () => {
    dispatch(verifySession())
  },
  removeSession: () => dispatch(removeSession())
})

const ConnectedHeader = ({ sessionData, verifySession, removeSession }) => {
  useEffect(verifySession, [])
  console.log(sessionData)
  return (
    <header className='m__header'>
      <div className='m__header__logo-title'>
        <img src={logoImg} alt='Listagram logo' />
        <h1>Listagram</h1>
      </div>
      {!sessionData && (
        <ButtonGroup
          classes={{ root: 'm__header__site-nav' }}
          fullWidth
          aria-label='full width outlined button group'
        >
          <NavLink to={routes.home} title='Home' />
          <NavLink to={routes.login} title='Login' />}
        </ButtonGroup>
      )}
      {sessionData && (
        <ButtonGroup
          classes={{ root: 'm__header__site-nav' }}
          fullWidth
          aria-label='full width outlined button group'
        >
          <NavLink to={routes.home} title='Home' />
          <NavLink to={routes.profile} title='Profile' />
          <NavLink to={routes.newList} title='New List' />
          <NavLink to={routes.edit} title='Edit List' />
          <NavLink to={routes.genres} title='Genres' />
          <NavLink
            to={routes.logout}
            title='Logout'
            color='default'
            action={() => {
              removeSession()
            }}
          />
        </ButtonGroup>
      )}
    </header>
  )
}

ConnectedHeader.propTypes = {
  sessionData: PropTypes.object
}

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader)

export default Header
