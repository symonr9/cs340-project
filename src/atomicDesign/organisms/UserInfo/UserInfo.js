import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { InputGroup, FormControl } from 'react-bootstrap'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import './UserInfo.scss'

const mapStateToProps = state => ({ sessionData: state.sessionData })

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

const ConnectedUserInfo = ({ sessionData }) => {
  console.log(sessionData)
  const { email, first_name: firstName, last_name: lastName } =
    sessionData || {}
  const classes = useStyles()
  return (
    <div className={`${classes.root} o__user-info`}>
      <Avatar className={classes.avatar}>
        {getInitials(firstName, lastName)}
      </Avatar>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={email}
          aria-label='Username'
          aria-describedby='basic-addon1'
          disabled
        />
      </InputGroup>
    </div>
  )
}

ConnectedUserInfo.propTypes = {
  sessionData: PropTypes.object
}

function getInitials (firstName, lastName) {
  if (firstName && firstName.length > 0 && lastName && lastName.length > 0) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  } else if (firstName && firstName.length > 1) {
    return `${firstName[0]}${firstName[1]}`.toUpperCase()
  } else return ''
}
const UserInfo = connect(mapStateToProps)(ConnectedUserInfo)

export default UserInfo
