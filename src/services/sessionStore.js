import moment from 'moment'

export const setSession = sessionData => {
  window.sessionStorage.setItem('session', JSON.stringify(sessionData))
}

export const getSession = () =>
  JSON.parse(window.sessionStorage.getItem('session'))

export const sessionIsActive = () => {
  const sessionData = getSession()
  if (sessionData) {
    const expires = moment(sessionData.expires)
    const now = moment()
    if (now < expires) return true
  }
  return false
}
