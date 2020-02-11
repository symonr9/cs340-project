import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImg from 'assets/logo.png'
import { routes } from 'siteData/routes'
import NavLink from 'atomicDesign/atoms/NavLink/NavLink'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import './Header.scss'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'rgb(230, 238, 244)'
  }
})

const Header = props => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  console.log(value)

  return (
    <header className='m__header'>
      <div className='m__header__logo-title'>
        <img src={logoImg} alt='Listagram logo' />
        <h1>Listagram</h1>
      </div>
      <nav className={classes.root}>
        {/* <ButtonGroup fullWidth aria-label='full width outlined button group'>
          <NavLink to={routes.login} title='Login' />
          <NavLink to={routes.newList} title='New List' />
          <NavLink to={routes.edit} title='Edit List' />
        </ButtonGroup> */}
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          className={classes.root}
        >
          {/* <Link> */}
          <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
          {/* </Link> */}
          <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
        </BottomNavigation>
      </nav>
    </header>
  )
}

Header.propTypes = {}

export default Header
