import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './NavLink.scss'

const useStyles = makeStyles(theme => ({
  root: {
    border: 0,
    borderRadius: 3,
    minHeight: 48,
    padding: '0 30px',
    margin: theme.spacing(1)
  }
}))

const NavLink = ({ to, title, styleClass, variant, color, action }) => {
  const classes = useStyles()
  return (
    <Link className={styleClass} to={to}>
      <Button
        className={classes.root}
        variant={variant}
        color={color}
        onClick={action}
      >
        {title}
      </Button>
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  styleClass: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
}

NavLink.defaultProps = {
  to: '',
  title: '',
  styleClass: 'a__nav-link',
  variant: 'contained',
  color: 'primary',
  action: () => null
}

export default NavLink
