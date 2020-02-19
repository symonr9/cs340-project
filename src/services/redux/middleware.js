import { SET_SESSION, REMOVE_SESSION, VERIFY_SESSION } from './actionTypes'
import {
  setSession,
  removeSession,
  sessionIsActive,
  getSession
} from 'services/sessionStore'
import { removeServerSession } from 'services/apiCalls'

export function handleSessionStorage ({ dispatch }) {
  return next => {
    return action => {
      //Sends session to local storage
      if (action.type === SET_SESSION && action.payload) {
        //Saves session in browser memory (session storage)
        setSession(action.payload)
      }
      if (action.type === REMOVE_SESSION) {
        //Removes server session
        removeServerSession(
          //Promise. On success, removes local session
          () => {
            removeSession()
          }
        )
      }
      if (action.type === VERIFY_SESSION) {
        if (sessionIsActive()) {
          return dispatch({ type: SET_SESSION, payload: getSession() })
        }
      }
      return next(action)
    }
  }
}
