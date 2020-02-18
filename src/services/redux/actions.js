import { SET_SESSION, REMOVE_SESSION, VERIFY_SESSION } from './actionTypes'

export const setSessionToStore = payload => {
  return { type: SET_SESSION, payload }
}
export const removeSession = payload => {
  return { type: REMOVE_SESSION, payload }
}
export const verifySession = payload => {
  return { type: VERIFY_SESSION, payload }
}
