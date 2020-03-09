import { SET_SESSION, REMOVE_SESSION, VERIFY_SESSION } from './actionTypes'

const initialState = {
	sessionData: null
}

const rootReducer = (state = initialState, action) => {
	if (action.type === SET_SESSION) {
		return { ...state, sessionData: { ...action.payload } }
	}
	if (action.type === REMOVE_SESSION) {
		return { ...state, sessionData: null }
	}
	if (action.type === VERIFY_SESSION) {
		return state
	}
	return state
}

export default rootReducer
