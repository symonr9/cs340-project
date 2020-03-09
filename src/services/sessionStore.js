import moment from 'moment'

export const setSession = sessionData => {
	window.sessionStorage.setItem('session', JSON.stringify(sessionData))
}

export const getSession = () =>
	JSON.parse(window.sessionStorage.getItem('session'))

export const removeSession = () => {
	try {
		window.sessionStorage.removeItem('session')
	} catch {
		console.error(
			'There seems to be a problem deleting the session. Check the console for more details.'
		)
	}
}

export const sessionIsActive = () => {
	const sessionData = getSession()
	if (sessionData) {
		const expires = moment(sessionData.expires)
		const now = moment()
		if (now < expires) return true
	}
	return false
}
