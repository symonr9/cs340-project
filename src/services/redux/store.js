import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { handleSessionStorage } from './middleware'

//For Dev tools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(handleSessionStorage))
)
export default store
