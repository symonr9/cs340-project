import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}))

export default function SnackBar({ success, message, open, handleClose }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity={`${success ? 'success' : 'error'}`}
				>
					{message}
				</Alert>
			</Snackbar>
		</div>
	)
}

SnackBar.propTypes = {
	success: PropTypes.bool.isRequired,
	message: PropTypes.string,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
}

SnackBar.defaultProps = {
	message: 'This is a message!'
}
