import React from 'react'
import PropTypes from 'prop-types'
import logoImg from 'assets/logo.png'
import { routes } from 'siteData/routes'
import NavLink from 'atomicDesign/atoms/NavLink/NavLink'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import './Header.scss'

const Header = props => {
  return (
    <header className='m__header'>
      <div className='m__header__logo-title'>
        <img src={logoImg} alt='Listagram logo' />
        <h1>Listagram</h1>
      </div>
      <ButtonGroup
        classes={{ root: 'm__header__site-nav' }}
        fullWidth
        aria-label='full width outlined button group'
      >
        <NavLink to={routes.home} title='Home' />
        <NavLink to={routes.login} title='Login' />
        <NavLink to={routes.newList} title='New List' />
        <NavLink to={routes.edit} title='Edit List' />
        <NavLink to={routes.genres} title='Genres' />
      </ButtonGroup>
    </header>
  )
}

Header.propTypes = {}

export default Header
