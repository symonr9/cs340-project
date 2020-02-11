import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { InputGroup, FormControl } from 'react-bootstrap'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import './UserInfo.scss'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

const UserInfo = props => {
  const classes = useStyles()
  return (
    <div className={`${classes.root} o__user-info`}>
      <Avatar className={classes.avatar}>OP</Avatar>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          disabled
        />
      </InputGroup>
    </div>
  )
}

UserInfo.propTypes = {}

export default UserInfo
